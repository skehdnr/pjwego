package com.wego.web.community;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wego.web.hotel.Comments;
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
	@Autowired CommunityService communityService;
	

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
	@GetMapping("/search/{searchword}")
	public Community[] search(@PathVariable String searchword) {
		return communityMapper.allcommunitylist().stream()
				.filter(t -> t.getTitle().contains(searchword) || t.getContent().contains(searchword))
				.toArray(Community[]::new);
	}

	
	@PostMapping("/write")
	   public String write(@RequestBody Community param){
	      Consumer<Community> c = s->communityMapper.insertCommunity(param);
	      c.accept(param);   
	      Supplier<String> f = ()->communityMapper.getcommunityseq();
	      return f.get();
	   }
	
	@PutMapping("/fileupload/{art_seq}")
    public void fileupload(MultipartFile [] uploadFile , @PathVariable String art_seq) {
      String name = fileProxy.fileupload(uploadFile);
      community.setArt_img(name);
      community.setArt_seq(art_seq);
      communityMapper.insertIMG(community);
      
    }

	  @GetMapping("/crawler")
	   public ArrayList<HashMap<String,String>> db()  {
		  System.out.println("크롤링......"+communityCrawler.communityCrawing());
	      return communityCrawler.communityCrawing();

	   }
	  
	  
	  
		@PostMapping("/insert/Reply")
		public Map<?, ?> Reply(@RequestBody Reply param) {
			Map<String, Object> map = new HashMap<>();
			Consumer<Reply> c = t -> communityMapper.insertReply(param);
			c.accept(param);
			map.clear();
			map.put("msg","SUCCESS");
			return map;
		
		}
		
		@GetMapping("/newReply/{art_seq}")
		public Map<String, Object> ReplyNew(@PathVariable int art_seq) {
			Map<String, Object> map = new HashMap<>();
			reply.setArt_seq(String.valueOf(art_seq));
			map.put("reply", communityService.findReply(art_seq));
			return map;
		}	  
		@GetMapping("/reply/{art_seq}")
		public Map<String, Object> commentsList(@PathVariable int art_seq) {
			Map<String, Object> map = new HashMap<>();
			reply.setArt_seq(String.valueOf(art_seq));
			map.put("reply", communityService.findReplyList(reply));
			return map;
		}
		
		
}
