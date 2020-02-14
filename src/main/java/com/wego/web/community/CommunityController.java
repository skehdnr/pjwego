package com.wego.web.community;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wego.web.mapper.CommunityMapper;
import com.wego.web.proxy.Inventory;

@RestController
@RequestMapping("/community")
public class CommunityController {
	@Autowired CommunityMapper communityMapper;
	@Autowired CommunityCrawling communityCrawler;
	@Autowired Inventory<Community[]> inventory;
	@Autowired CommunityProxy communityProxy;
	@Autowired FileProxy fileProxy;	
	@Autowired Reply reply;
	@Autowired Community community;

	@Autowired Like like;
	

    @GetMapping("/create/table")
    public Map<?,?> createCommunity(){
    	HashMap<String,String> paramMap = new HashMap<>();
    	paramMap.put("CREATE_COMMUNITY", SQL.CREATE_COMMUNITY.toString());
    	Consumer<HashMap<String,String>> c = t-> communityMapper.createCommunity(paramMap);
    	c.accept(paramMap);
    	paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
    	return paramMap;
     }
	 
    @GetMapping("/create/tablelike")
    public Map<?,?> createLiketo(){
    	HashMap<String,String> paramMap = new HashMap<>();
    	paramMap.put("CREATE_COMMUNITY", SQL.CREATE_LIKE.toString());
    	Consumer<HashMap<String,String>> c = t-> communityMapper.createCommunity(paramMap);
    	c.accept(paramMap);
    	paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
    	return paramMap;
    }
    @GetMapping("/create/tablecomment")
    public Map<?,?> createReply(){
    	HashMap<String,String> paramMap = new HashMap<>();
    	paramMap.put("CREATE_COMMUNITY", SQL.CREATE_REPLY.toString());
    	Consumer<HashMap<String,String>> c = t-> communityMapper.createCommunity(paramMap);
    	c.accept(paramMap);
    	paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
    	return paramMap;
    }
  
  
  
  
	@GetMapping("/list/{pageNo}")
	public Map<?,?>list(@PathVariable int pageNo){
		System.out.println("리스트 컨트롤러");
		HashMap<String,List<Community>> map = new HashMap<>();
		communityProxy.setPageNum(pageNo);
		communityProxy.paging();
		map.put("community", communityMapper.communitylist(communityProxy));
		return map;
	}
	
	@GetMapping("/reply/{artseq}")
	public Map<?,?>reply(@PathVariable int artseq){
		System.out.println("코멘트 읽기 컨트롤러");
		HashMap<String,List<Reply>> map = new HashMap<>();		
		map.put("reply", communityMapper.getreply(artseq));
		return map;
	}
	
	
	@GetMapping("/likeimg/{artseq}/{UID}")
	public Map<?,?>likeimg(@PathVariable String artseq,@PathVariable String uid){
		System.out.println("이미지컨트롤러");
		HashMap<String,String> map = new HashMap<>();
		like.setArtseq(artseq);
		like.setUid(uid);
		map.put("likecheck", communityMapper.liked(like));
		return map;
	}

	@GetMapping("/search/{searchword}")
	public Community[] search(@PathVariable String searchword){	
		return communityMapper.allcommunitylist().stream().toArray(Community[]::new);
	}
	

	
	@PostMapping("/write")
	public Map<?,?> write(@RequestBody Community param){
		HashMap<String,String> map = new HashMap<>();
		Consumer<Community> c = s->communityMapper.insertCommunity(param);
		c.accept(param);	
		return map;
	}
	
	@PostMapping("/fileupload/{UID}")
    public void fileupload(MultipartFile [] uploadFile,@PathVariable String uid) {
		System.out.println("파일 업로드");
		fileProxy.fileupload(uploadFile);
		community.setUid(uid);
		community.setArtseq(communityMapper.selectbyuid(community));
		community.setImg(uploadFile.toString());
		communityMapper.insertIMG(community);
		
    }
	
	
	@PostMapping("/{artseq}/reply")
	public Map<?,?> reply(@RequestBody Reply param,@PathVariable String artseq){
		HashMap<String,String> map = new HashMap<>();
		System.out.println("코멘트 컨트롤러"+artseq);
		Consumer<Reply> c = s->communityMapper.insertReply(param);
		c.accept(param);
		map.put("reply", param.getRcomments());
		return map;
	
	}
	  @GetMapping("/crawler")
	   public ArrayList<HashMap<String,String>> db()  {
		  System.out.println("crawling");
	      return communityCrawler.communityCrawing();

	   }
	
}
