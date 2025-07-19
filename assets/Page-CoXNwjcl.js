import{j as t}from"./index-CeRg6Q3f.js";import{R as e}from"./RedditPostRenderer-D7n1g-D8.js";import"./index-DPToWe3n.js";const a=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`I am trying to build a full crawler and scraper that runs completely locally with the help of an LLM to that it can work with any website and without writing code for each site.

**Example of a use case:**  
I want to scrape the list of watches from Amazon without using traditional scrapers that rely on CSS selectors.   
Example: [https://www.amazon.com/s?k=watches](https://www.amazon.com/s?k=watches)  
I will help the LLM or AI library find the relevant data so I tell it in a prompt/input the values of the first watch brand name, description and price. Name, description and price are my data points.  
I tell it that the first watch is Apple, whatever its description is on Amazon and the price. I might also do this again for the second watch. Casio, its description and its price, for better accuracy. The more examples, the better the accuracy.  I attach the raw HTML (minus the CSS and JS to lessen the tokens) of the page or the extracted full text or a pdf of the webpage. 

Then the LLM or AI library will extract the rest of the watches. Their name, description and price.   
My crawler will get the second page, attach the file in another prompt and tell it to extract the same type of data. It should know by now to do this over and over. Hopefully accurately every time.

  
My question is.. which open source library and/or LLM can be used to do what I have explained?

  
These are libraries I found that look interesting but I don't know which ones satisfy my requirements.  
I feel I need to train the LLM or library with real examples. I have tried some online examples of these libraries and prompt them for what I want and got bad results. I feel they need some training and guidance first.  
  
If an LLM is needed, which one to be used with Ollama or LM Studio?  
I want everything to run on a local Windows machine to save costs and not use a cloud based LLM.



[https://huggingface.co/jinaai/ReaderLM-v2](https://huggingface.co/jinaai/ReaderLM-v2)

[https://github.com/raznem/parsera](https://github.com/raznem/parsera)

[https://github.com/unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)

[https://github.com/ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai)









  
`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"Which local LLMs and/or libraries can I use to guide or train to identify where relevant data is located on a web page for web scraping purposes? Using natural language",link_flair_richtext:[{e:"text",t:"Question | Help"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1m06bru",quarantine:!1,link_flair_text_color:"dark",upvote_ratio:1,author_flair_background_color:null,subreddit_type:"public",ups:1,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_7a5yt",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Question | Help",can_mod_post:!1,score:1,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1752547335,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;I am trying to build a full crawler and scraper that runs completely locally with the help of an LLM to that it can work with any website and without writing code for each site.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Example of a use case:&lt;/strong&gt;&lt;br/&gt;
I want to scrape the list of watches from Amazon without using traditional scrapers that rely on CSS selectors.&lt;br/&gt;
Example: &lt;a href="https://www.amazon.com/s?k=watches"&gt;https://www.amazon.com/s?k=watches&lt;/a&gt;&lt;br/&gt;
I will help the LLM or AI library find the relevant data so I tell it in a prompt/input the values of the first watch brand name, description and price. Name, description and price are my data points.&lt;br/&gt;
I tell it that the first watch is Apple, whatever its description is on Amazon and the price. I might also do this again for the second watch. Casio, its description and its price, for better accuracy. The more examples, the better the accuracy.  I attach the raw HTML (minus the CSS and JS to lessen the tokens) of the page or the extracted full text or a pdf of the webpage. &lt;/p&gt;

&lt;p&gt;Then the LLM or AI library will extract the rest of the watches. Their name, description and price.&lt;br/&gt;
My crawler will get the second page, attach the file in another prompt and tell it to extract the same type of data. It should know by now to do this over and over. Hopefully accurately every time.&lt;/p&gt;

&lt;p&gt;My question is.. which open source library and/or LLM can be used to do what I have explained?&lt;/p&gt;

&lt;p&gt;These are libraries I found that look interesting but I don&amp;#39;t know which ones satisfy my requirements.&lt;br/&gt;
I feel I need to train the LLM or library with real examples. I have tried some online examples of these libraries and prompt them for what I want and got bad results. I feel they need some training and guidance first.  &lt;/p&gt;

&lt;p&gt;If an LLM is needed, which one to be used with Ollama or LM Studio?&lt;br/&gt;
I want everything to run on a local Windows machine to save costs and not use a cloud based LLM.&lt;/p&gt;

&lt;p&gt;&lt;a href="https://huggingface.co/jinaai/ReaderLM-v2"&gt;https://huggingface.co/jinaai/ReaderLM-v2&lt;/a&gt;&lt;/p&gt;

&lt;p&gt;&lt;a href="https://github.com/raznem/parsera"&gt;https://github.com/raznem/parsera&lt;/a&gt;&lt;/p&gt;

&lt;p&gt;&lt;a href="https://github.com/unclecode/crawl4ai"&gt;https://github.com/unclecode/crawl4ai&lt;/a&gt;&lt;/p&gt;

&lt;p&gt;&lt;a href="https://github.com/ScrapeGraphAI/Scrapegraph-ai"&gt;https://github.com/ScrapeGraphAI/Scrapegraph-ai&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!0,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"2c9831e6-bf92-11ed-98e6-d2b8bcc02ae1",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#5a74cc",id:"1m06bru",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"THenrich",discussion_type:null,num_comments:0,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1m06bru/which_local_llms_andor_libraries_can_i_use_to/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1m06bru/which_local_llms_andor_libraries_can_i_use_to/",subreddit_subscribers:499294,created_utc:1752547335,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[],before:null}}],i=()=>t.jsx(e,{data:a});export{i as default};
