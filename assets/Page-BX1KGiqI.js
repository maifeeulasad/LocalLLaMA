import{j as t}from"./index-CWmJdUH_.js";import{R as e}from"./RedditPostRenderer-D2iunoQ9.js";import"./index-BCg9RP6g.js";const l=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`Been working with LLMs for a while and got tired of manually tracking prompt versions. Made a Python tool that handles this automatically.

# What it does

* Automatically versions your prompts when you commit to git
* Test prompt changes before committing with \`:unstaged\` reference
* Works with any LLM (OpenAI, Anthropic, local models)
* Zero manual version management

# Quick example

    from llmhq_promptops import get_prompt
    
    # Get the working version
    prompt = get_prompt("user-greeting")
    
    # Test uncommitted changes  
    prompt = get_prompt("user-greeting:unstaged")
    
    # Specific version
    prompt = get_prompt("user-greeting:v1.2.0")
    

# Install

    pip install llmhq-promptops
    promptops init repo
    

The git hooks handle versioning automatically - PATCH for content changes, MINOR for new variables, MAJOR for breaking changes.

Thought this community might find it useful since we all deal with prompt management headaches.

GitHub: [https://github.com/llmhq-hub/promptops](https://github.com/llmhq-hub/promptops)`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"I built a tool for managing prompts like code in git",link_flair_richtext:[{e:"text",t:"Discussion"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1lpvwh3",quarantine:!1,link_flair_text_color:"light",upvote_ratio:1,author_flair_background_color:null,subreddit_type:"public",ups:1,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_1spkozujfu",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Discussion",can_mod_post:!1,score:1,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},post_hint:"self",content_categories:null,is_self:!0,mod_note:null,created:1751462982,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Been working with LLMs for a while and got tired of manually tracking prompt versions. Made a Python tool that handles this automatically.&lt;/p&gt;

&lt;h1&gt;What it does&lt;/h1&gt;

&lt;ul&gt;
&lt;li&gt;Automatically versions your prompts when you commit to git&lt;/li&gt;
&lt;li&gt;Test prompt changes before committing with &lt;code&gt;:unstaged&lt;/code&gt; reference&lt;/li&gt;
&lt;li&gt;Works with any LLM (OpenAI, Anthropic, local models)&lt;/li&gt;
&lt;li&gt;Zero manual version management&lt;/li&gt;
&lt;/ul&gt;

&lt;h1&gt;Quick example&lt;/h1&gt;

&lt;pre&gt;&lt;code&gt;from llmhq_promptops import get_prompt

# Get the working version
prompt = get_prompt(&amp;quot;user-greeting&amp;quot;)

# Test uncommitted changes  
prompt = get_prompt(&amp;quot;user-greeting:unstaged&amp;quot;)

# Specific version
prompt = get_prompt(&amp;quot;user-greeting:v1.2.0&amp;quot;)
&lt;/code&gt;&lt;/pre&gt;

&lt;h1&gt;Install&lt;/h1&gt;

&lt;pre&gt;&lt;code&gt;pip install llmhq-promptops
promptops init repo
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;The git hooks handle versioning automatically - PATCH for content changes, MINOR for new variables, MAJOR for breaking changes.&lt;/p&gt;

&lt;p&gt;Thought this community might find it useful since we all deal with prompt management headaches.&lt;/p&gt;

&lt;p&gt;GitHub: &lt;a href="https://github.com/llmhq-hub/promptops"&gt;https://github.com/llmhq-hub/promptops&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!0,is_crosspostable:!1,pinned:!1,over_18:!1,preview:{images:[{source:{url:"https://external-preview.redd.it/o3PmNP2OL7ctHNAdRCSQSrdK0jT5IPtsBfFR7S-4acQ.png?auto=webp&amp;s=6a6c99ca9be235d457062f87f3b149157c4a26ae",width:1200,height:600},resolutions:[{url:"https://external-preview.redd.it/o3PmNP2OL7ctHNAdRCSQSrdK0jT5IPtsBfFR7S-4acQ.png?width=108&amp;crop=smart&amp;auto=webp&amp;s=9491dac3eef562b93c4c641b452ed1c66f284300",width:108,height:54},{url:"https://external-preview.redd.it/o3PmNP2OL7ctHNAdRCSQSrdK0jT5IPtsBfFR7S-4acQ.png?width=216&amp;crop=smart&amp;auto=webp&amp;s=9ff720421d1acf755d519c6f53cbc8150ddd3379",width:216,height:108},{url:"https://external-preview.redd.it/o3PmNP2OL7ctHNAdRCSQSrdK0jT5IPtsBfFR7S-4acQ.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=5abd9c79f170a57ec48b9a058ab2d387a5ff9a5a",width:320,height:160},{url:"https://external-preview.redd.it/o3PmNP2OL7ctHNAdRCSQSrdK0jT5IPtsBfFR7S-4acQ.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=a949604c681b87d948795220ff74ef38c6d42554",width:640,height:320},{url:"https://external-preview.redd.it/o3PmNP2OL7ctHNAdRCSQSrdK0jT5IPtsBfFR7S-4acQ.png?width=960&amp;crop=smart&amp;auto=webp&amp;s=945473ff68aaa3a2a4b9caeadbfea5a151b8f32f",width:960,height:480},{url:"https://external-preview.redd.it/o3PmNP2OL7ctHNAdRCSQSrdK0jT5IPtsBfFR7S-4acQ.png?width=1080&amp;crop=smart&amp;auto=webp&amp;s=c397c249b778d96b40fc73be47421fcd97fdd990",width:1080,height:540}],variants:{},id:"o3PmNP2OL7ctHNAdRCSQSrdK0jT5IPtsBfFR7S-4acQ"}],enabled:!1},all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"5f921ea4-c7bc-11ed-9c23-3a00622979b4",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#646d73",id:"1lpvwh3",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"llmhq_official",discussion_type:null,num_comments:0,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1lpvwh3/i_built_a_tool_for_managing_prompts_like_code_in/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1lpvwh3/i_built_a_tool_for_managing_prompts_like_code_in/",subreddit_subscribers:494001,created_utc:1751462982,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[],before:null}}],o=()=>t.jsx(e,{data:l});export{o as default};
