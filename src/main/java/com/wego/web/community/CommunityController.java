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
		HashMap<String,List<Community>> map = new HashMap<>();
		communityProxy.setPageNum(pageNo);
		communityProxy.paging();
		map.put("community", communityMapper.communitylist(communityProxy));
		return map;
	}
	
	@GetMapping("/reply/{art_seq}")
	public Map<?,?>reply(@PathVariable int art_seq){
		HashMap<String,List<Reply>> map = new HashMap<>();		
		map.put("reply", communityMapper.getreply(art_seq));
		return map;
	}
	
	
	@GetMapping("/likeimg/{artseq}/{userid}")
	public Map<?,?>likeimg(@PathVariable String art_seq,@PathVariable String userid){
		HashMap<String,String> map = new HashMap<>();
		like.setArt_seq(art_seq);
		like.setUserid(userid);
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
	
	@PostMapping("/fileupload/{userid}")
    public void fileupload(MultipartFile [] uploadFile,@PathVariable String userid) {
		fileProxy.fileupload(uploadFile);
		community.setUserid(userid);
		community.setArt_seq(communityMapper.selectbyuid(community));
		community.setArt_img(uploadFile.toString());
		communityMapper.insertIMG(community);
		
    }
	
	
	@PostMapping("/{artseq}/reply")
	public Map<?,?> reply(@RequestBody Reply param,@PathVariable String art_seq){
		HashMap<String,String> map = new HashMap<>();
		Consumer<Reply> c = s->communityMapper.insertReply(param);
		c.accept(param);
		map.put("reply", param.getBoard_comment());
		return map;
	
	}
	  @GetMapping("/crawler")
	   public ArrayList<HashMap<String,String>> db()  {
	      return communityCrawler.communityCrawing();

	   }
	
}
