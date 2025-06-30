import{j as e}from"./index-BTIgvohq.js";import{R as t}from"./RedditPostRenderer-almq7it9.js";import"./index-tYRBzv7e.js";const o=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`Hi there !

Quite a few months ago, I had this great idea that I'd collect second hand 4090s once their price would plummet after the launch of the 5090. ☺

We all know how that went ☹.

I still have good use for the server (dual Epyc Gen 2 with 2TB of RAM on [https://www.asrockrack.com/general/productdetail.asp?Model=ROME2D32GM-2T#Specifications](https://www.asrockrack.com/general/productdetail.asp?Model=ROME2D32GM-2T#Specifications) with up to 9 PCIe x 16) but I'm having second thoughts about my original plan.

I have one 4090, but I realize it would be cheaper to get **8** V620 than 3 4090 !

256 GB VRAM would be pretty insane even if the bandwidth (512 GB/s per card) and compute (40.55 TFLOPS fp16 per card) would be similar for 8 V620 as for 4 4090 (1008 GB/s per card and 82.58 TFLOPS fp16 per card,  tensor cores)

So it seems to me that :

For models requiring less than 96 GB VRAM (including context) 4 × 4090 would be best.

For everything requiring CUDA ☹, 4090 would be best (as in, the only option)

But, for the few models that are between 96 GB VRAM and 256 GB VRAM (DeepSeek Q2\\_K\\_R4, llama 3.1 405, Llama 4 Maverick Q4, ???), to share GPUs/ VRAM between users if the Linux gim driver is ever released [https://forums.servethehome.com/index.php?threads/mxgpu-radeon-pro-v620.38735/post-419150](https://forums.servethehome.com/index.php?threads/mxgpu-radeon-pro-v620.38735/post-419150) , to have multiple models running at once (I would love to try some ensemble generation using multiple models at once) , the V620 would be best.

The V620 would be more in character with the whole server (quantity over quality, cf 96 cores of Gen 2, 2TB of DDR4)and in line with my other plans for it (actual server with a dozen or two of concurrent users)

I'm worried about is the fine tuning situation. I had hoped to distill the sourced/grounded  RAG abilities of larger models on a given specific corpus into smaller LLMs. Since ROCm should work on V62), I've heard reports of successful inference with them, but I'm not clear on the fine tuning side of things (for ROCm in general, V620 in particular).

What is your opinion, what would you do given the option and why ?

  
Thx for any insight !`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"Pros and cons of 4 × 4090 vs 8 × V620",link_flair_richtext:[{e:"text",t:"Question | Help"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1llw6ws",quarantine:!1,link_flair_text_color:"dark",upvote_ratio:.71,author_flair_background_color:null,subreddit_type:"public",ups:3,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_7rqtc",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Question | Help",can_mod_post:!1,score:3,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1751036712,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hi there !&lt;/p&gt;

&lt;p&gt;Quite a few months ago, I had this great idea that I&amp;#39;d collect second hand 4090s once their price would plummet after the launch of the 5090. ☺&lt;/p&gt;

&lt;p&gt;We all know how that went ☹.&lt;/p&gt;

&lt;p&gt;I still have good use for the server (dual Epyc Gen 2 with 2TB of RAM on &lt;a href="https://www.asrockrack.com/general/productdetail.asp?Model=ROME2D32GM-2T#Specifications"&gt;https://www.asrockrack.com/general/productdetail.asp?Model=ROME2D32GM-2T#Specifications&lt;/a&gt; with up to 9 PCIe x 16) but I&amp;#39;m having second thoughts about my original plan.&lt;/p&gt;

&lt;p&gt;I have one 4090, but I realize it would be cheaper to get &lt;strong&gt;8&lt;/strong&gt; V620 than 3 4090 !&lt;/p&gt;

&lt;p&gt;256 GB VRAM would be pretty insane even if the bandwidth (512 GB/s per card) and compute (40.55 TFLOPS fp16 per card) would be similar for 8 V620 as for 4 4090 (1008 GB/s per card and 82.58 TFLOPS fp16 per card,  tensor cores)&lt;/p&gt;

&lt;p&gt;So it seems to me that :&lt;/p&gt;

&lt;p&gt;For models requiring less than 96 GB VRAM (including context) 4 × 4090 would be best.&lt;/p&gt;

&lt;p&gt;For everything requiring CUDA ☹, 4090 would be best (as in, the only option)&lt;/p&gt;

&lt;p&gt;But, for the few models that are between 96 GB VRAM and 256 GB VRAM (DeepSeek Q2_K_R4, llama 3.1 405, Llama 4 Maverick Q4, ???), to share GPUs/ VRAM between users if the Linux gim driver is ever released &lt;a href="https://forums.servethehome.com/index.php?threads/mxgpu-radeon-pro-v620.38735/post-419150"&gt;https://forums.servethehome.com/index.php?threads/mxgpu-radeon-pro-v620.38735/post-419150&lt;/a&gt; , to have multiple models running at once (I would love to try some ensemble generation using multiple models at once) , the V620 would be best.&lt;/p&gt;

&lt;p&gt;The V620 would be more in character with the whole server (quantity over quality, cf 96 cores of Gen 2, 2TB of DDR4)and in line with my other plans for it (actual server with a dozen or two of concurrent users)&lt;/p&gt;

&lt;p&gt;I&amp;#39;m worried about is the fine tuning situation. I had hoped to distill the sourced/grounded  RAG abilities of larger models on a given specific corpus into smaller LLMs. Since ROCm should work on V62), I&amp;#39;ve heard reports of successful inference with them, but I&amp;#39;m not clear on the fine tuning side of things (for ROCm in general, V620 in particular).&lt;/p&gt;

&lt;p&gt;What is your opinion, what would you do given the option and why ?&lt;/p&gt;

&lt;p&gt;Thx for any insight !&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!1,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"2c9831e6-bf92-11ed-98e6-d2b8bcc02ae1",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#5a74cc",id:"1llw6ws",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"un_passant",discussion_type:null,num_comments:0,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1llw6ws/pros_and_cons_of_4_4090_vs_8_v620/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1llw6ws/pros_and_cons_of_4_4090_vs_8_v620/",subreddit_subscribers:492233,created_utc:1751036712,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[],before:null}}],r=()=>e.jsx(t,{data:o});export{r as default};
