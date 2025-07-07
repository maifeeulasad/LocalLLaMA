import{j as t}from"./index-CjwP30j7.js";import{R as e}from"./RedditPostRenderer-BbYuEq_V.js";import"./index-C-yxLSPN.js";const l=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`I'm using \`llama.cpp\` to  run  TinyLLaMA) and I've successfully built the project using:

    cmake --build . --config Release

Everything works fine when I run:

    ./llama-cli -m models/tinyllama.gguf

However, I'm stuck trying to do a **one-shot generation** ( I want to provide a prompt and it should return output without entering interactive mode. )

What I tried (none of these work):

* \`-p "Hello! What is AI?"\` — works but drops into interactive mode afterward
* \`--no-interactive\` or \`-ni\` — invalid argument
* \`-i 0\` — same result

I’d like to run a prompt and exit immediately after output.

# Details:

* Built from recent \`llama.cpp\` repo
* Model: TinyLLaMA 1.1B, GGUF format, quantized

Thanks in advance 🙏`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"How to Run a One-Shot Prompt (Non-Interactive) with llama.cpp?",link_flair_richtext:[{e:"text",t:"Question | Help"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1ltqb0n",quarantine:!1,link_flair_text_color:"dark",upvote_ratio:.75,author_flair_background_color:null,subreddit_type:"public",ups:2,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_nir1sm6u8",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Question | Help",can_mod_post:!1,score:2,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1751882721,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;I&amp;#39;m using &lt;code&gt;llama.cpp&lt;/code&gt; to  run  TinyLLaMA) and I&amp;#39;ve successfully built the project using:&lt;/p&gt;

&lt;pre&gt;&lt;code&gt;cmake --build . --config Release
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;Everything works fine when I run:&lt;/p&gt;

&lt;pre&gt;&lt;code&gt;./llama-cli -m models/tinyllama.gguf
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;However, I&amp;#39;m stuck trying to do a &lt;strong&gt;one-shot generation&lt;/strong&gt; ( I want to provide a prompt and it should return output without entering interactive mode. )&lt;/p&gt;

&lt;p&gt;What I tried (none of these work):&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;&lt;code&gt;-p &amp;quot;Hello! What is AI?&amp;quot;&lt;/code&gt; — works but drops into interactive mode afterward&lt;/li&gt;
&lt;li&gt;&lt;code&gt;--no-interactive&lt;/code&gt; or &lt;code&gt;-ni&lt;/code&gt; — invalid argument&lt;/li&gt;
&lt;li&gt;&lt;code&gt;-i 0&lt;/code&gt; — same result&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;I’d like to run a prompt and exit immediately after output.&lt;/p&gt;

&lt;h1&gt;Details:&lt;/h1&gt;

&lt;ul&gt;
&lt;li&gt;Built from recent &lt;code&gt;llama.cpp&lt;/code&gt; repo&lt;/li&gt;
&lt;li&gt;Model: TinyLLaMA 1.1B, GGUF format, quantized&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;Thanks in advance 🙏&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!1,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"2c9831e6-bf92-11ed-98e6-d2b8bcc02ae1",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#5a74cc",id:"1ltqb0n",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"glow-rishi",discussion_type:null,num_comments:2,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1ltqb0n/how_to_run_a_oneshot_prompt_noninteractive_with/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1ltqb0n/how_to_run_a_oneshot_prompt_noninteractive_with/",subreddit_subscribers:495646,created_utc:1751882721,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[{kind:"t1",data:{subreddit_id:"t5_81eyvm",approved_at_utc:null,author_is_blocked:!1,comment_type:null,awarders:[],mod_reason_by:null,banned_by:null,author_flair_type:"text",total_awards_received:0,subreddit:"LocalLLaMA",author_flair_template_id:null,likes:null,replies:"",user_reports:[],saved:!1,id:"n1sbqtk",banned_at_utc:null,mod_reason_title:null,gilded:0,archived:!1,collapsed_reason_code:null,no_follow:!1,author:"shockwaverc13",can_mod_post:!1,created_utc:1751885414,send_replies:!0,parent_id:"t3_1ltqb0n",score:6,author_fullname:"t2_4kmeiai4",approved_by:null,mod_note:null,all_awardings:[],collapsed:!1,body:`\\--no-conversation or -no-cnv

it sucks they didn't keep the old param`,edited:!1,top_awarded_type:null,author_flair_css_class:null,name:"t1_n1sbqtk",is_submitter:!1,downs:0,author_flair_richtext:[],author_patreon_flair:!1,body_html:`&lt;div class="md"&gt;&lt;p&gt;--no-conversation or -no-cnv&lt;/p&gt;

&lt;p&gt;it sucks they didn&amp;#39;t keep the old param&lt;/p&gt;
&lt;/div&gt;`,removal_reason:null,collapsed_reason:null,distinguished:null,associated_award:null,stickied:!1,author_premium:!1,can_gild:!1,gildings:{},unrepliable_reason:null,author_flair_text_color:null,score_hidden:!1,permalink:"/r/LocalLLaMA/comments/1ltqb0n/how_to_run_a_oneshot_prompt_noninteractive_with/n1sbqtk/",subreddit_type:"public",locked:!1,report_reasons:null,created:1751885414,author_flair_text:null,treatment_tags:[],link_id:"t3_1ltqb0n",subreddit_name_prefixed:"r/LocalLLaMA",controversiality:0,depth:0,author_flair_background_color:null,collapsed_because_crowd_control:null,mod_reports:[],num_reports:null,ups:6}}],before:null}}],r=()=>t.jsx(e,{data:l});export{r as default};
