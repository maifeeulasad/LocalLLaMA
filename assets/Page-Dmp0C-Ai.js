import{j as e}from"./index-BpC9hjVs.js";import{R as l}from"./RedditPostRenderer-BEo6AnSR.js";import"./index-DwkJHX1_.js";const t=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`Curious if anyone here is experimenting with local LLMs in a small business or freelance context — either for clients or internal tooling.

Not the usual “just playing around” test rig, but:

* Are you trying to integrate local LLMs (like llama.cpp/Ollama) into real-world workflows?
* How do you deal with inference speed, system resource usage, multi-user access, or automation?
* What would make your life easier right now?

I’m researching real-world use cases for self-hosted AI tooling. No product shill, just trying to map the terrain and learn from the people in the trenches.

Appreciate all stories — messy, brilliant, or broken.`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"Local LLMs in small biz setups — anyone using them in production-like scenarios?",link_flair_richtext:[{e:"text",t:"Question | Help"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1lvne34",quarantine:!1,link_flair_text_color:"dark",upvote_ratio:1,author_flair_background_color:null,subreddit_type:"public",ups:1,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_ivw1twhd",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Question | Help",can_mod_post:!1,score:1,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1752078862,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Curious if anyone here is experimenting with local LLMs in a small business or freelance context — either for clients or internal tooling.&lt;/p&gt;

&lt;p&gt;Not the usual “just playing around” test rig, but:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Are you trying to integrate local LLMs (like llama.cpp/Ollama) into real-world workflows?&lt;/li&gt;
&lt;li&gt;How do you deal with inference speed, system resource usage, multi-user access, or automation?&lt;/li&gt;
&lt;li&gt;What would make your life easier right now?&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;I’m researching real-world use cases for self-hosted AI tooling. No product shill, just trying to map the terrain and learn from the people in the trenches.&lt;/p&gt;

&lt;p&gt;Appreciate all stories — messy, brilliant, or broken.&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!0,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"2c9831e6-bf92-11ed-98e6-d2b8bcc02ae1",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#5a74cc",id:"1lvne34",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"ExcellentSector3561",discussion_type:null,num_comments:1,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1lvne34/local_llms_in_small_biz_setups_anyone_using_them/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1lvne34/local_llms_in_small_biz_setups_anyone_using_them/",subreddit_subscribers:497025,created_utc:1752078862,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[{kind:"t1",data:{subreddit_id:"t5_81eyvm",approved_at_utc:null,author_is_blocked:!1,comment_type:null,awarders:[],mod_reason_by:null,banned_by:null,author_flair_type:"text",total_awards_received:0,subreddit:"LocalLLaMA",author_flair_template_id:null,likes:null,replies:"",user_reports:[],saved:!1,id:"n27c4c3",banned_at_utc:null,mod_reason_title:null,gilded:0,archived:!1,collapsed_reason_code:null,no_follow:!0,author:"Conscious_Cut_6144",can_mod_post:!1,created_utc:1752079197,send_replies:!0,parent_id:"t3_1lvne34",score:2,author_fullname:"t2_9hl4ymvj",approved_by:null,mod_note:null,all_awardings:[],collapsed:!1,body:`Yes lots of people, include me.  
No you don't use llama.cpp/Ollama, because those tools are very bad at multi user (production) workloads.  
VLLM and a Pro 6000 can push thousands of t/s

We are doing a couple:  
1) OpenWebUI for internal employees.  
2) Our client facing website has a beta agentic workflow  
3) We have an LLM summarizing some of our data durring off hours.`,edited:!1,top_awarded_type:null,author_flair_css_class:null,name:"t1_n27c4c3",is_submitter:!1,downs:0,author_flair_richtext:[],author_patreon_flair:!1,body_html:`&lt;div class="md"&gt;&lt;p&gt;Yes lots of people, include me.&lt;br/&gt;
No you don&amp;#39;t use llama.cpp/Ollama, because those tools are very bad at multi user (production) workloads.&lt;br/&gt;
VLLM and a Pro 6000 can push thousands of t/s&lt;/p&gt;

&lt;p&gt;We are doing a couple:&lt;br/&gt;
1) OpenWebUI for internal employees.&lt;br/&gt;
2) Our client facing website has a beta agentic workflow&lt;br/&gt;
3) We have an LLM summarizing some of our data durring off hours.&lt;/p&gt;
&lt;/div&gt;`,removal_reason:null,collapsed_reason:null,distinguished:null,associated_award:null,stickied:!1,author_premium:!1,can_gild:!1,gildings:{},unrepliable_reason:null,author_flair_text_color:null,score_hidden:!1,permalink:"/r/LocalLLaMA/comments/1lvne34/local_llms_in_small_biz_setups_anyone_using_them/n27c4c3/",subreddit_type:"public",locked:!1,report_reasons:null,created:1752079197,author_flair_text:null,treatment_tags:[],link_id:"t3_1lvne34",subreddit_name_prefixed:"r/LocalLLaMA",controversiality:0,depth:0,author_flair_background_color:null,collapsed_because_crowd_control:null,mod_reports:[],num_reports:null,ups:2}}],before:null}}],s=()=>e.jsx(l,{data:t});export{s as default};
