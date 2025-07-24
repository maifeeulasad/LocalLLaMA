import{j as t}from"./index-BOnf-UhU.js";import{R as e}from"./RedditPostRenderer-Ce39qICS.js";import"./index-CDase6VD.js";const l=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`Hi all,

Firstly, I’m not a developer, so forgive me if I don’t ask as clearly as others, I hope this makes sense.

I'm trying to get Chatterbox TTS ( local AI voice tool with Gradio UI) working on my **Windows 11** machine using **Conda** and a local **Python 3.11.3 environment**. I’ve installed the app and interface successfully, but I’m stuck with import errors and GPU not being used. Here’s the key info:

* **GPU:** RTX 4060 (8GB), CUDA 12.7 installed
* **Python:** 3.11.3 (inside Conda)
* **PyTorch:** Installed via pip/conda (tried both), but errors persist
* **TorchAudio:** Likely not aligned with correct PyTorch/CUDA version
* **Gradio UI:** Loads, but model doesn't run (import error)

The critical error:

lua

CopyEdit

ImportError: DLL load failed while importing \\_C: The specified module could not be found.

I understand this might be due to mismatched **PyTorch / CUDA / TorchAudio** versions — but the **CUDA 12.7 runtime** doesn't show up on most PyTorch install tables (latest listed is 12.1).

**Questions:**

1. **Can I safely use a PyTorch build meant for CUDA 12.1 if I have 12.7 installed?**
2. **Which PyTorch + TorchAudio versions are guaranteed to work together (and with Chatterbox) under CUDA 12.7?**
3. Is there a known *minimal install combo* that just works?
4. Should I downgrade CUDA to 12.1, or can I work with what I have?

I’m not a developer, so detailed explanations or clear steps would be hugely appreciated. Thanks in advance!`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"Chatterbox CUDA and PyTorch problem",link_flair_richtext:[{e:"text",t:"Question | Help"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1m6cfou",quarantine:!1,link_flair_text_color:"dark",upvote_ratio:.6,author_flair_background_color:null,subreddit_type:"public",ups:1,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_94iwvjrz",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Question | Help",can_mod_post:!1,score:1,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1753186390,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hi all,&lt;/p&gt;

&lt;p&gt;Firstly, I’m not a developer, so forgive me if I don’t ask as clearly as others, I hope this makes sense.&lt;/p&gt;

&lt;p&gt;I&amp;#39;m trying to get Chatterbox TTS ( local AI voice tool with Gradio UI) working on my &lt;strong&gt;Windows 11&lt;/strong&gt; machine using &lt;strong&gt;Conda&lt;/strong&gt; and a local &lt;strong&gt;Python 3.11.3 environment&lt;/strong&gt;. I’ve installed the app and interface successfully, but I’m stuck with import errors and GPU not being used. Here’s the key info:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;GPU:&lt;/strong&gt; RTX 4060 (8GB), CUDA 12.7 installed&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Python:&lt;/strong&gt; 3.11.3 (inside Conda)&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;PyTorch:&lt;/strong&gt; Installed via pip/conda (tried both), but errors persist&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;TorchAudio:&lt;/strong&gt; Likely not aligned with correct PyTorch/CUDA version&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Gradio UI:&lt;/strong&gt; Loads, but model doesn&amp;#39;t run (import error)&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;The critical error:&lt;/p&gt;

&lt;p&gt;lua&lt;/p&gt;

&lt;p&gt;CopyEdit&lt;/p&gt;

&lt;p&gt;ImportError: DLL load failed while importing _C: The specified module could not be found.&lt;/p&gt;

&lt;p&gt;I understand this might be due to mismatched &lt;strong&gt;PyTorch / CUDA / TorchAudio&lt;/strong&gt; versions — but the &lt;strong&gt;CUDA 12.7 runtime&lt;/strong&gt; doesn&amp;#39;t show up on most PyTorch install tables (latest listed is 12.1).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Questions:&lt;/strong&gt;&lt;/p&gt;

&lt;ol&gt;
&lt;li&gt;&lt;strong&gt;Can I safely use a PyTorch build meant for CUDA 12.1 if I have 12.7 installed?&lt;/strong&gt;&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Which PyTorch + TorchAudio versions are guaranteed to work together (and with Chatterbox) under CUDA 12.7?&lt;/strong&gt;&lt;/li&gt;
&lt;li&gt;Is there a known &lt;em&gt;minimal install combo&lt;/em&gt; that just works?&lt;/li&gt;
&lt;li&gt;Should I downgrade CUDA to 12.1, or can I work with what I have?&lt;/li&gt;
&lt;/ol&gt;

&lt;p&gt;I’m not a developer, so detailed explanations or clear steps would be hugely appreciated. Thanks in advance!&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!0,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"2c9831e6-bf92-11ed-98e6-d2b8bcc02ae1",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#5a74cc",id:"1m6cfou",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"kevin-she",discussion_type:null,num_comments:1,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1m6cfou/chatterbox_cuda_and_pytorch_problem/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1m6cfou/chatterbox_cuda_and_pytorch_problem/",subreddit_subscribers:503254,created_utc:1753186390,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[],before:null}}],r=()=>t.jsx(e,{data:l});export{r as default};
