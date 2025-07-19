import{j as e}from"./index-DQXiEb7D.js";import{R as t}from"./RedditPostRenderer-BjndLgq8.js";import"./index-B-ILyjT1.js";const l=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`Hi everyone,
I'm trying to run MythoMax-L2-13B-GPTQ on RunPod using the text-generation-webui (Oobabooga).

The model loads, the WebUI starts fine, and I can open the interface. However, when I try to generate text, the model just replies with empty lines or no output at all.

Here's what I've tried:

Launched the pod with "One Click Installer"

Used the --model MythoMax-L2-13B-GPTQ flag

Activated the virtual environment properly (.venv)

Tried server.py with --listen-port 8888


I also noticed that the HTTP service still shows as "Not Ready", even though I can access the UI.

Questions:

1. Is this a model compatibility issue or a memory issue (even though the pod has 24GB+ VRAM)?


2. Do I need to adjust settings.json or model loader parameters manually?


3. How do I verify that the model is correctly quantized and loaded?



Would appreciate any advice from folks who've made MythoMax or similar NSFW models work on RunPod!

Thanks in advance.`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"Trouble running MythoMax-L2-13B-GPTQ on RunPod – Model loads but returns empty responses",link_flair_richtext:[{e:"text",t:"Question | Help"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1m3smiz",quarantine:!1,link_flair_text_color:"dark",upvote_ratio:1,author_flair_background_color:null,subreddit_type:"public",ups:2,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_b46y73fz",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Question | Help",can_mod_post:!1,score:2,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1752919648,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hi everyone,
I&amp;#39;m trying to run MythoMax-L2-13B-GPTQ on RunPod using the text-generation-webui (Oobabooga).&lt;/p&gt;

&lt;p&gt;The model loads, the WebUI starts fine, and I can open the interface. However, when I try to generate text, the model just replies with empty lines or no output at all.&lt;/p&gt;

&lt;p&gt;Here&amp;#39;s what I&amp;#39;ve tried:&lt;/p&gt;

&lt;p&gt;Launched the pod with &amp;quot;One Click Installer&amp;quot;&lt;/p&gt;

&lt;p&gt;Used the --model MythoMax-L2-13B-GPTQ flag&lt;/p&gt;

&lt;p&gt;Activated the virtual environment properly (.venv)&lt;/p&gt;

&lt;p&gt;Tried server.py with --listen-port 8888&lt;/p&gt;

&lt;p&gt;I also noticed that the HTTP service still shows as &amp;quot;Not Ready&amp;quot;, even though I can access the UI.&lt;/p&gt;

&lt;p&gt;Questions:&lt;/p&gt;

&lt;ol&gt;
&lt;li&gt;&lt;p&gt;Is this a model compatibility issue or a memory issue (even though the pod has 24GB+ VRAM)?&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Do I need to adjust settings.json or model loader parameters manually?&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;How do I verify that the model is correctly quantized and loaded?&lt;/p&gt;&lt;/li&gt;
&lt;/ol&gt;

&lt;p&gt;Would appreciate any advice from folks who&amp;#39;ve made MythoMax or similar NSFW models work on RunPod!&lt;/p&gt;

&lt;p&gt;Thanks in advance.&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!1,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"2c9831e6-bf92-11ed-98e6-d2b8bcc02ae1",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#5a74cc",id:"1m3smiz",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"Icy_Blacksmith8549",discussion_type:null,num_comments:0,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1m3smiz/trouble_running_mythomaxl213bgptq_on_runpod_model/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1m3smiz/trouble_running_mythomaxl213bgptq_on_runpod_model/",subreddit_subscribers:501232,created_utc:1752919648,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[],before:null}}],s=()=>e.jsx(t,{data:l});export{s as default};
