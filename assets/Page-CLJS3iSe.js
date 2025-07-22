import{j as e}from"./index-BgwOAK4-.js";import{R as t}from"./RedditPostRenderer-BOBjDTFu.js";import"./index-BL22wVg5.js";const a=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`Hi guys, 

I had created a rag application but i made it for documents of PDF format only. I use PyMuPDF4llm to parse the PDF. 

But now I want to add the option for all the document formats, i.e, pptx, xlsx, csv, docx, and the image formats.

I tried docling for this, since PyMuPDF4llm requires subscription to allow rest of the document formats. 

I created a standalone setup to test docling. Docling uses external OCR engines, it had 2 options. Tesseract and RapidOCR.

I set up the one with RapidOCR. The documents, whether pdf, csv or pptx are parsed and its output are stored into markdown format. 

I am facing some issues. These are:

1. Time that it takes to parse the content inside images into markdown are very random, some image takes 12-15 minutes, some images are easily parsed with 2-3 minutes. why is this so random? Is it possible to speed up this process? 

2. The output for scanned images, or image of documents that were captured using camera are not that good. Can something be done to enhance its performance?

3. Images that are embedded into pptx or docx, such as graph or chart don't get parsed properly. The labelling inside them such the x or y axis data, or data points within graph are just mentioned in the markdown output in a badly formatted manner. That data becomes useless for me.`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"Facing some problems with Docling parser",link_flair_richtext:[{e:"text",t:"Question | Help"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1m5or7n",quarantine:!1,link_flair_text_color:"dark",upvote_ratio:1,author_flair_background_color:null,subreddit_type:"public",ups:1,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_wf267hqnf",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Question | Help",can_mod_post:!1,score:1,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1753117936,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hi guys, &lt;/p&gt;

&lt;p&gt;I had created a rag application but i made it for documents of PDF format only. I use PyMuPDF4llm to parse the PDF. &lt;/p&gt;

&lt;p&gt;But now I want to add the option for all the document formats, i.e, pptx, xlsx, csv, docx, and the image formats.&lt;/p&gt;

&lt;p&gt;I tried docling for this, since PyMuPDF4llm requires subscription to allow rest of the document formats. &lt;/p&gt;

&lt;p&gt;I created a standalone setup to test docling. Docling uses external OCR engines, it had 2 options. Tesseract and RapidOCR.&lt;/p&gt;

&lt;p&gt;I set up the one with RapidOCR. The documents, whether pdf, csv or pptx are parsed and its output are stored into markdown format. &lt;/p&gt;

&lt;p&gt;I am facing some issues. These are:&lt;/p&gt;

&lt;ol&gt;
&lt;li&gt;&lt;p&gt;Time that it takes to parse the content inside images into markdown are very random, some image takes 12-15 minutes, some images are easily parsed with 2-3 minutes. why is this so random? Is it possible to speed up this process? &lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;The output for scanned images, or image of documents that were captured using camera are not that good. Can something be done to enhance its performance?&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Images that are embedded into pptx or docx, such as graph or chart don&amp;#39;t get parsed properly. The labelling inside them such the x or y axis data, or data points within graph are just mentioned in the markdown output in a badly formatted manner. That data becomes useless for me.&lt;/p&gt;&lt;/li&gt;
&lt;/ol&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!0,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"2c9831e6-bf92-11ed-98e6-d2b8bcc02ae1",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#5a74cc",id:"1m5or7n",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"ElectronicHoneydew86",discussion_type:null,num_comments:0,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1m5or7n/facing_some_problems_with_docling_parser/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1m5or7n/facing_some_problems_with_docling_parser/",subreddit_subscribers:502515,created_utc:1753117936,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[],before:null}}],l=()=>e.jsx(t,{data:a});export{l as default};
