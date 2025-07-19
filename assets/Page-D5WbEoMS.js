import{j as e}from"./index-cvG704yx.js";import{R as t}from"./RedditPostRenderer-CBthLTAH.js";import"./index-D-GavSZU.js";const a=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`Sharing notes in case it helps anyone. I don't often find people talking about models like Jamba and we have access to it, so figure it might be useful.

\\-  
  
Been testing local models for drafting first-pass answers to internal RFPs. The source material is rough. Basically a mix of PDF exports, old responses in docx, inconsistent product specs, wiki dumps and suchlike.

I'm running a basic RAG pipeline over it using section-level chunking and a semantic search index. Nothing too exotic. Retrieval pulls five chunks per query and I'm prompting each model to answer strictly from the provided input. Tried Jamba, Mistral 7B and Mixtral on the same prompts.

My findings:

Mixtral gave the most natural writing style. Handled formatting like bullet points well, but when chunks were overlapping or contradicting, it sometimes mashed them together. Sounded coherent, but didn't track to any one source.

Mistral played it safer but the answers often felt incomplete. Would stop early or skip chunks if they weren't clearly relevant. Better than Mixtral at avoiding noise but I had to rerun prompts more often to get full coverage.

Jamba was slightly slower and more verbose, but I could actually trace the language back to the retrieved text most of the time. It didn't try to fill in gaps with guesswork and it stayed anchored to the input without inventing policy language. It was more useful in review. Didn't have to figure out where something came from.

Still experimenting with reranking to clean up the retrieval layer. Jamba has been the most consistent in situations where accuracy matters more than polish. Might try pairing it with. post-processing model to tighten up the tone without losing the original source trail.`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"Drafting RFP answers with Jamba, Mistral, Mixtral",link_flair_richtext:[{e:"text",t:"Discussion"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1lpqyra",quarantine:!1,link_flair_text_color:"light",upvote_ratio:1,author_flair_background_color:null,subreddit_type:"public",ups:3,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_1kwk178bd9",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Discussion",can_mod_post:!1,score:3,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1751446846,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Sharing notes in case it helps anyone. I don&amp;#39;t often find people talking about models like Jamba and we have access to it, so figure it might be useful.&lt;/p&gt;

&lt;p&gt;-  &lt;/p&gt;

&lt;p&gt;Been testing local models for drafting first-pass answers to internal RFPs. The source material is rough. Basically a mix of PDF exports, old responses in docx, inconsistent product specs, wiki dumps and suchlike.&lt;/p&gt;

&lt;p&gt;I&amp;#39;m running a basic RAG pipeline over it using section-level chunking and a semantic search index. Nothing too exotic. Retrieval pulls five chunks per query and I&amp;#39;m prompting each model to answer strictly from the provided input. Tried Jamba, Mistral 7B and Mixtral on the same prompts.&lt;/p&gt;

&lt;p&gt;My findings:&lt;/p&gt;

&lt;p&gt;Mixtral gave the most natural writing style. Handled formatting like bullet points well, but when chunks were overlapping or contradicting, it sometimes mashed them together. Sounded coherent, but didn&amp;#39;t track to any one source.&lt;/p&gt;

&lt;p&gt;Mistral played it safer but the answers often felt incomplete. Would stop early or skip chunks if they weren&amp;#39;t clearly relevant. Better than Mixtral at avoiding noise but I had to rerun prompts more often to get full coverage.&lt;/p&gt;

&lt;p&gt;Jamba was slightly slower and more verbose, but I could actually trace the language back to the retrieved text most of the time. It didn&amp;#39;t try to fill in gaps with guesswork and it stayed anchored to the input without inventing policy language. It was more useful in review. Didn&amp;#39;t have to figure out where something came from.&lt;/p&gt;

&lt;p&gt;Still experimenting with reranking to clean up the retrieval layer. Jamba has been the most consistent in situations where accuracy matters more than polish. Might try pairing it with. post-processing model to tighten up the tone without losing the original source trail.&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!1,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"5f921ea4-c7bc-11ed-9c23-3a00622979b4",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#646d73",id:"1lpqyra",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"NullPointerJack",discussion_type:null,num_comments:0,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1lpqyra/drafting_rfp_answers_with_jamba_mistral_mixtral/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1lpqyra/drafting_rfp_answers_with_jamba_mistral_mixtral/",subreddit_subscribers:494001,created_utc:1751446846,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[],before:null}}],s=()=>e.jsx(t,{data:a});export{s as default};
