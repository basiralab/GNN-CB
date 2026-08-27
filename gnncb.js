/**
 * GNN-CB — embed setup, theme/fitting, page logic, figure assets
 */
const GNNCB_FIGURE_HTML = {
  "fig1": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8" />
<title>Exact TikZ-to-HTML Recreation</title>
<style>

body{
    margin:0;
    background:white;
    font-family:Arial, Helvetica, sans-serif;
}

.figure{
    width:1400px;
    height:1300px;
    margin:auto;
    position:relative;
    background:white;
}

/* =========================================================
TITLE
========================================================= */

.title{
    position:absolute;
    top:10px;
    width:100%;
    text-align:center;
    font-size:28px;
    font-weight:bold;
    letter-spacing:0.4px;
}

.subtitle{
    position:absolute;
    top:52px;
    width:100%;
    text-align:center;
    font-size:14px;
    color:#777;
}

/* =========================================================
PANELS
========================================================= */

.panel{
    position:absolute;
    border:2px dashed #cfcfcf;
    border-radius:12px;
    background:white;
}

.left{
    left:20px;
    top:90px;
    width:650px;
    height:860px;
}

.right{
    right:20px;
    top:90px;
    width:670px;
    height:860px;
}

.paneltitle{
    position:absolute;
    top:10px;
    width:100%;
    text-align:center;
    font-size:16px;
    font-weight:bold;
}

/* =========================================================
LABELS
========================================================= */

.label{
    position:absolute;
    font-size:13px;
    color:#777;
    font-style:italic;
}

/* =========================================================
CHIPS
========================================================= */

.chip{
    position:absolute;
    padding:4px 10px;
    border-radius:5px;
    border:1px solid;
    font-size:11px;
    font-weight:bold;
    white-space:nowrap;
}

.blue{
    background:#dfe9ff;
    border-color:#6a95ff;
    color:#1744b5;
}

.teal{
    background:#d9fff7;
    border-color:#3fc7b0;
    color:#006b61;
}

.orange{
    background:#ffe7d6;
    border-color:#ff9a4a;
    color:#b25d00;
}

.purple{
    background:#f0e4ff;
    border-color:#a66fff;
    color:#6a2dc5;
}

.green{
    background:#ddffdf;
    border-color:#55bf5d;
    color:#1c7a22;
}

.pink{
    background:#ffdce9;
    border-color:#ff7caf;
    color:#b91e65;
}

.red{
    background:#ffe0e0;
    border-color:#ff7272;
    color:#b60000;
}

.amber{
    background:#fff2d4;
    border-color:#ffbf45;
    color:#996000;
}

/* =========================================================
INFOBOX
========================================================= */

.infobox{
    position:absolute;
    border:1px solid #cfcfcf;
    border-radius:5px;
    background:#f7f7f7;
    padding:6px 8px;
    font-size:11px;
    text-align:center;
    line-height:1.4;
}

/* =========================================================
PROTOCOL HEADER
========================================================= */

.protocol{
    position:absolute;
    border-radius:6px;
    padding:7px 10px;
    font-size:12px;
    font-weight:bold;
    border:1px solid;
}

.protocol-purple{
    background:#efe2ff;
    border-color:#a66fff;
    color:#6a2dc5;
}

.protocol-teal{
    background:#d9fff7;
    border-color:#3fc7b0;
    color:#006b61;
}

.protocol-blue{
    background:#dfe9ff;
    border-color:#6a95ff;
    color:#1744b5;
}

/* =========================================================
BOTTOM PIPELINE
========================================================= */

.pipeline{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    border-radius:8px;
    padding:14px 24px;
    border:2px solid;
    text-align:center;
    font-weight:bold;
}

.pipe1{
    bottom:130px;
    width:720px;
    background:#efe2ff;
    border-color:#a66fff;
    color:#6a2dc5;
}

.pipe2{
    bottom:30px;
    width:620px;
    background:#d9fff7;
    border-color:#3fc7b0;
    color:#006b61;
}

.small{
    font-size:12px;
    font-weight:normal;
}

.arrow{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    font-size:40px;
    color:#777;
}

.a1{bottom:220px;}
.a2{bottom:90px;}

.line{
    position:absolute;
    border-top:2px dashed #bbb;
    width:220px;
}

.line1{
    left:350px;
    bottom:245px;
    transform:rotate(18deg);
}

.line2{
    right:350px;
    bottom:245px;
    transform:rotate(-18deg);
}

</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>

<body>

<div class="figure fig-benchmark-overview">

<div class="title">GNN-CB: benchmark overview</div>

<div class="subtitle">
18 competitions · 3 protocols · unified hidden-test evaluation
</div>

<!-- =====================================================
LEFT PANEL
===================================================== -->

<div class="panel left">

<div class="paneltitle">Competition taxonomy</div>

<!-- labels -->

<div class="label" style="left:18px; top:60px;">Category</div>
<div class="label" style="left:250px; top:60px;">Difficulty</div>
<div class="label" style="left:430px; top:60px;">Task type</div>

<!-- category -->

<div class="chip blue" style="left:18px; top:90px;">Homogeneous</div>
<div class="chip teal" style="left:18px; top:130px;">Heterogeneous</div>
<div class="chip orange" style="left:18px; top:170px;">Temporal</div>
<div class="chip orange" style="left:18px; top:210px;">Spatial</div>
<div class="chip purple" style="left:18px; top:250px;">Hierarchical</div>
<div class="chip green" style="left:18px; top:290px;">Molecular</div>
<div class="chip pink" style="left:18px; top:330px;">Generalization</div>

<!-- difficulty -->

<div class="chip green" style="left:250px; top:90px;">Easy</div>
<div class="chip amber" style="left:250px; top:130px;">Medium</div>
<div class="chip orange" style="left:250px; top:170px;">Hard</div>
<div class="chip red" style="left:250px; top:210px;">Expert</div>

<!-- task type -->

<div class="infobox" style="left:430px; top:90px; width:170px;">
Node classification
</div>

<div class="infobox" style="left:430px; top:130px; width:170px;">
Edge classification
</div>

<div class="infobox" style="left:430px; top:170px; width:170px;">
Graph classification
</div>

<div class="infobox" style="left:430px; top:210px; width:170px;">
Graph regression
</div>

<!-- competitions -->

<div class="label" style="left:250px; top:390px;">
18 competitions
</div>

<!-- row 1 -->

<div class="chip blue" style="left:20px; top:430px;">C01</div>
<div class="chip blue" style="left:90px; top:430px;">C02</div>
<div class="chip purple" style="left:160px; top:430px;">C03</div>
<div class="chip teal" style="left:230px; top:430px;">C04</div>
<div class="chip green" style="left:300px; top:430px;">C05</div>
<div class="chip blue" style="left:370px; top:430px;">C06</div>

<!-- row 2 -->

<div class="chip orange" style="left:20px; top:470px;">C07</div>
<div class="chip amber" style="left:90px; top:470px;">C08</div>
<div class="chip amber" style="left:160px; top:470px;">C09</div>
<div class="chip blue" style="left:230px; top:470px;">C10</div>
<div class="chip blue" style="left:300px; top:470px;">C11</div>
<div class="chip blue" style="left:370px; top:470px;">C12</div>

<!-- row 3 -->

<div class="chip pink" style="left:20px; top:510px;">C13</div>
<div class="chip blue" style="left:90px; top:510px;">C14</div>
<div class="chip blue" style="left:160px; top:510px;">C15</div>
<div class="chip blue" style="left:230px; top:510px;">C16</div>
<div class="chip blue" style="left:300px; top:510px;">C17</div>
<div class="chip orange" style="left:370px; top:510px;">C18</div>

<!-- domains -->

<div class="label" style="left:280px; top:580px;">
Domains
</div>

<div class="infobox" style="left:20px; top:620px;">Biomedical</div>
<div class="infobox" style="left:170px; top:620px;">Finance</div>
<div class="infobox" style="left:320px; top:620px;">Social</div>
<div class="infobox" style="left:470px; top:620px;">Cybersecurity</div>

<div class="infobox" style="left:20px; top:680px;">Transport</div>
<div class="infobox" style="left:170px; top:680px;">Academic</div>
<div class="infobox" style="left:320px; top:680px;">Neuroimaging</div>
<div class="infobox" style="left:470px; top:680px;">Bioprinting</div>

<!-- stats -->

<div class="infobox" style="left:60px; top:770px; width:150px;">
<b>18</b> competitions
</div>

<div class="infobox" style="left:250px; top:770px; width:150px;">
<b>7</b> graph categories
</div>

<div class="infobox" style="left:440px; top:770px; width:150px;">
<b>3</b> difficulty tiers
</div>

</div>

<!-- =====================================================
RIGHT PANEL
===================================================== -->

<div class="panel right">

<div class="paneltitle">Evaluation protocols</div>

<!-- protocol 1 -->

<div class="protocol protocol-purple"
style="left:20px; top:55px; width:610px;">
Protocol 1 · GitHub Competition design
</div>

<div class="infobox"
style="left:20px; top:100px; width:260px;">
<b>Repository</b><br>
README · datasets<br>
submission spec · tree
</div>

<div class="infobox"
style="left:340px; top:100px; width:260px;">
<b>Hidden test sets</b><br>
GitHub Actions pipeline<br>
live leaderboard
</div>

<!-- protocol 2 -->

<div class="protocol protocol-teal"
style="left:20px; top:230px; width:610px;">
Protocol 2 · Human evaluation
</div>

<div class="infobox"
style="left:20px; top:280px; width:170px;">
<b>Constraints</b><br>
GNN only<br>
3 CPU hrs<br>
seed=25<br>
Without LLMs<br>
≤5 runs
</div>

<div class="infobox"
style="left:240px; top:280px; width:170px;">
<b>Participants</b><br>
13–17 per task<br>
1 final submission
</div>

<div class="infobox"
style="left:460px; top:280px; width:170px;">
<b>Output</b><br>
predictions.csv<br>
(encrypted)
</div>

<!-- protocol 3 -->

<div class="protocol protocol-blue"
style="left:20px; top:480px; width:610px;">
Protocol 3 · LLM evaluation
</div>

<div class="infobox"
style="left:20px; top:530px; width:120px;">
<b>Slot fill</b><br>
README<br>
tree · data<br>
spec · reqs
</div>

<div class="infobox"
style="left:170px; top:530px; width:120px;">
<b>Frozen prompt</b><br>
zero-shot<br>
no tuning
</div>

<div class="infobox"
style="left:320px; top:530px; width:120px;">
<b>Plan-then-code</b><br>
&lt;plan&gt;<br>
&lt;code&gt;
</div>

<div class="infobox"
style="left:470px; top:530px; width:120px;">
<b>Repair loop</b><br>
k≤5 iters<br>
traceback
</div>

<div class="infobox"
style="left:20px; top:690px; width:600px;">
Agent mode (autonomous repo exploration) |
Non-agent mode (manual prompt filling)
</div>

<div class="label" style="left:260px; top:760px;">
Evaluated models
</div>

<div class="infobox" style="left:20px; top:790px;">Claude Opus</div>
<div class="infobox" style="left:170px; top:790px;">Gemini 2.5</div>
<div class="infobox" style="left:320px; top:790px;">GPT 5.4</div>
<div class="infobox" style="left:470px; top:790px;">Gemini 3 flash</div>

<div class="infobox" style="left:20px; top:835px;">DeepSeek v4</div>
<div class="infobox" style="left:170px; top:835px;">Llama 3.3</div>
<div class="infobox" style="left:320px; top:835px;">Qwen 2.5</div>
<div class="infobox" style="left:470px; top:835px;">Kimi k 2.6</div>

</div>

<!-- bottom connectors -->

<div class="line line1"></div>
<div class="line line2"></div>

<div class="pipeline pipe1">
Unified hidden-test evaluation pipeline

<div class="small">
GitHub Actions · automated scoring · identical conditions for all submissions
</div>
</div>

<div class="arrow a2">↓</div>

<div class="pipeline pipe2">
Leaderboard + per-task metrics

<div class="small">
human vs. LLM · live updates
</div>
</div>

</div>

</body>
</html>`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8" />
<title>Exact TikZ-to-HTML Recreation</title>
<style>

body{
    margin:0;
    background:white;
    font-family:Arial, Helvetica, sans-serif;
}

.figure{
    width:1400px;
    height:1300px;
    margin:auto;
    position:relative;
    background:white;
}

/* =========================================================
TITLE
========================================================= */

.title{
    position:absolute;
    top:10px;
    width:100%;
    text-align:center;
    font-size:28px;
    font-weight:bold;
    letter-spacing:0.4px;
}

.subtitle{
    position:absolute;
    top:52px;
    width:100%;
    text-align:center;
    font-size:14px;
    color:#777;
}

/* =========================================================
PANELS
========================================================= */

.panel{
    position:absolute;
    border:2px dashed #cfcfcf;
    border-radius:12px;
    background:white;
}

.left{
    left:20px;
    top:90px;
    width:650px;
    height:860px;
}

.right{
    right:20px;
    top:90px;
    width:670px;
    height:860px;
}

.paneltitle{
    position:absolute;
    top:10px;
    width:100%;
    text-align:center;
    font-size:16px;
    font-weight:bold;
}

/* =========================================================
LABELS
========================================================= */

.label{
    position:absolute;
    font-size:13px;
    color:#777;
    font-style:italic;
}

/* =========================================================
CHIPS
========================================================= */

.chip{
    position:absolute;
    padding:4px 10px;
    border-radius:5px;
    border:1px solid;
    font-size:11px;
    font-weight:bold;
    white-space:nowrap;
}

.blue{
    background:#dfe9ff;
    border-color:#6a95ff;
    color:#1744b5;
}

.teal{
    background:#d9fff7;
    border-color:#3fc7b0;
    color:#006b61;
}

.orange{
    background:#ffe7d6;
    border-color:#ff9a4a;
    color:#b25d00;
}

.purple{
    background:#f0e4ff;
    border-color:#a66fff;
    color:#6a2dc5;
}

.green{
    background:#ddffdf;
    border-color:#55bf5d;
    color:#1c7a22;
}

.pink{
    background:#ffdce9;
    border-color:#ff7caf;
    color:#b91e65;
}

.red{
    background:#ffe0e0;
    border-color:#ff7272;
    color:#b60000;
}

.amber{
    background:#fff2d4;
    border-color:#ffbf45;
    color:#996000;
}

/* =========================================================
INFOBOX
========================================================= */

.infobox{
    position:absolute;
    border:1px solid #cfcfcf;
    border-radius:5px;
    background:#f7f7f7;
    padding:6px 8px;
    font-size:11px;
    text-align:center;
    line-height:1.4;
}

/* =========================================================
PROTOCOL HEADER
========================================================= */

.protocol{
    position:absolute;
    border-radius:6px;
    padding:7px 10px;
    font-size:12px;
    font-weight:bold;
    border:1px solid;
}

.protocol-purple{
    background:#efe2ff;
    border-color:#a66fff;
    color:#6a2dc5;
}

.protocol-teal{
    background:#d9fff7;
    border-color:#3fc7b0;
    color:#006b61;
}

.protocol-blue{
    background:#dfe9ff;
    border-color:#6a95ff;
    color:#1744b5;
}

/* =========================================================
BOTTOM PIPELINE
========================================================= */

.pipeline{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    border-radius:8px;
    padding:14px 24px;
    border:2px solid;
    text-align:center;
    font-weight:bold;
}

.pipe1{
    bottom:130px;
    width:720px;
    background:#efe2ff;
    border-color:#a66fff;
    color:#6a2dc5;
}

.pipe2{
    bottom:30px;
    width:620px;
    background:#d9fff7;
    border-color:#3fc7b0;
    color:#006b61;
}

.small{
    font-size:12px;
    font-weight:normal;
}

.arrow{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    font-size:40px;
    color:#777;
}

.a1{bottom:220px;}
.a2{bottom:90px;}

.line{
    position:absolute;
    border-top:2px dashed #bbb;
    width:220px;
}

.line1{
    left:350px;
    bottom:245px;
    transform:rotate(18deg);
}

.line2{
    right:350px;
    bottom:245px;
    transform:rotate(-18deg);
}

</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>

<body>

<div class="figure fig-benchmark-overview">

<div class="title">GNN-CB: benchmark overview</div>

<div class="subtitle">
18 competitions · 3 protocols · unified hidden-test evaluation
</div>

<!-- =====================================================
LEFT PANEL
===================================================== -->

<div class="panel left">

<div class="paneltitle">Competition taxonomy</div>

<!-- labels -->

<div class="label" style="left:18px; top:60px;">Category</div>
<div class="label" style="left:250px; top:60px;">Difficulty</div>
<div class="label" style="left:430px; top:60px;">Task type</div>

<!-- category -->

<div class="chip blue" style="left:18px; top:90px;">Homogeneous</div>
<div class="chip teal" style="left:18px; top:130px;">Heterogeneous</div>
<div class="chip orange" style="left:18px; top:170px;">Temporal</div>
<div class="chip orange" style="left:18px; top:210px;">Spatial</div>
<div class="chip purple" style="left:18px; top:250px;">Hierarchical</div>
<div class="chip green" style="left:18px; top:290px;">Molecular</div>
<div class="chip pink" style="left:18px; top:330px;">Generalization</div>

<!-- difficulty -->

<div class="chip green" style="left:250px; top:90px;">Easy</div>
<div class="chip amber" style="left:250px; top:130px;">Medium</div>
<div class="chip orange" style="left:250px; top:170px;">Hard</div>
<div class="chip red" style="left:250px; top:210px;">Expert</div>

<!-- task type -->

<div class="infobox" style="left:430px; top:90px; width:170px;">
Node classification
</div>

<div class="infobox" style="left:430px; top:130px; width:170px;">
Edge classification
</div>

<div class="infobox" style="left:430px; top:170px; width:170px;">
Graph classification
</div>

<div class="infobox" style="left:430px; top:210px; width:170px;">
Graph regression
</div>

<!-- competitions -->

<div class="label" style="left:250px; top:390px;">
18 competitions
</div>

<!-- row 1 -->

<div class="chip blue" style="left:20px; top:430px;">C01</div>
<div class="chip blue" style="left:90px; top:430px;">C02</div>
<div class="chip purple" style="left:160px; top:430px;">C03</div>
<div class="chip teal" style="left:230px; top:430px;">C04</div>
<div class="chip green" style="left:300px; top:430px;">C05</div>
<div class="chip blue" style="left:370px; top:430px;">C06</div>

<!-- row 2 -->

<div class="chip orange" style="left:20px; top:470px;">C07</div>
<div class="chip amber" style="left:90px; top:470px;">C08</div>
<div class="chip amber" style="left:160px; top:470px;">C09</div>
<div class="chip blue" style="left:230px; top:470px;">C10</div>
<div class="chip blue" style="left:300px; top:470px;">C11</div>
<div class="chip blue" style="left:370px; top:470px;">C12</div>

<!-- row 3 -->

<div class="chip pink" style="left:20px; top:510px;">C13</div>
<div class="chip blue" style="left:90px; top:510px;">C14</div>
<div class="chip blue" style="left:160px; top:510px;">C15</div>
<div class="chip blue" style="left:230px; top:510px;">C16</div>
<div class="chip blue" style="left:300px; top:510px;">C17</div>
<div class="chip orange" style="left:370px; top:510px;">C18</div>

<!-- domains -->

<div class="label" style="left:280px; top:580px;">
Domains
</div>

<div class="infobox" style="left:20px; top:620px;">Biomedical</div>
<div class="infobox" style="left:170px; top:620px;">Finance</div>
<div class="infobox" style="left:320px; top:620px;">Social</div>
<div class="infobox" style="left:470px; top:620px;">Cybersecurity</div>

<div class="infobox" style="left:20px; top:680px;">Transport</div>
<div class="infobox" style="left:170px; top:680px;">Academic</div>
<div class="infobox" style="left:320px; top:680px;">Neuroimaging</div>
<div class="infobox" style="left:470px; top:680px;">Bioprinting</div>

<!-- stats -->

<div class="infobox" style="left:60px; top:770px; width:150px;">
<b>18</b> competitions
</div>

<div class="infobox" style="left:250px; top:770px; width:150px;">
<b>7</b> graph categories
</div>

<div class="infobox" style="left:440px; top:770px; width:150px;">
<b>4</b> difficulty tiers
</div>

</div>

<!-- =====================================================
RIGHT PANEL
===================================================== -->

<div class="panel right">

<div class="paneltitle">Evaluation protocols</div>

<!-- protocol 1 -->

<div class="protocol protocol-purple"
style="left:20px; top:55px; width:610px;">
Protocol 1 · GitHub Competition design
</div>

<div class="infobox"
style="left:20px; top:100px; width:260px;">
<b>Repository</b><br>
README · datasets<br>
submission spec · tree
</div>

<div class="infobox"
style="left:340px; top:100px; width:260px;">
<b>Hidden test sets</b><br>
GitHub Actions pipeline<br>
live leaderboard
</div>

<!-- protocol 2 -->

<div class="protocol protocol-teal"
style="left:20px; top:230px; width:610px;">
Protocol 2 · Human evaluation
</div>

<div class="infobox"
style="left:20px; top:280px; width:170px;">
<b>Constraints</b><br>
GNN only<br>
3 CPU hrs<br>
seed=25<br>
Without LLMs<br>
≤5 runs
</div>

<div class="infobox"
style="left:240px; top:280px; width:170px;">
<b>Participants</b><br>
13–17 per task<br>
1 final submission
</div>

<div class="infobox"
style="left:460px; top:280px; width:170px;">
<b>Output</b><br>
predictions.csv<br>
(encrypted)
</div>

<!-- protocol 3 -->

<div class="protocol protocol-blue"
style="left:20px; top:480px; width:610px;">
Protocol 3 · LLM evaluation
</div>

<div class="infobox"
style="left:20px; top:530px; width:120px;">
<b>Slot fill</b><br>
README<br>
tree · data<br>
spec · reqs
</div>

<div class="infobox"
style="left:170px; top:530px; width:120px;">
<b>Frozen prompt</b><br>
zero-shot<br>
no tuning
</div>

<div class="infobox"
style="left:320px; top:530px; width:120px;">
<b>Plan-then-code</b><br>
&lt;plan&gt;<br>
&lt;code&gt;
</div>

<div class="infobox"
style="left:470px; top:530px; width:120px;">
<b>Repair loop</b><br>
k≤5 iters<br>
traceback
</div>

<div class="infobox"
style="left:20px; top:690px; width:600px;">
Agent mode (autonomous repo exploration) |
Non-agent mode (manual prompt filling)
</div>

<div class="label" style="left:260px; top:760px;">
Evaluated models
</div>

<div class="infobox" style="left:20px; top:790px;">Claude Opus</div>
<div class="infobox" style="left:170px; top:790px;">Gemini 2.5</div>
<div class="infobox" style="left:320px; top:790px;">GPT 5.4</div>
<div class="infobox" style="left:470px; top:790px;">Gemini 3 flash</div>

<div class="infobox" style="left:20px; top:835px;">DeepSeek v4</div>
<div class="infobox" style="left:170px; top:835px;">Llama 3.3</div>
<div class="infobox" style="left:320px; top:835px;">Qwen 2.5</div>
<div class="infobox" style="left:470px; top:835px;">Kimi k 2.6</div>

</div>

<!-- bottom connectors -->

<div class="line line1"></div>
<div class="line line2"></div>

<div class="pipeline pipe1">
Unified hidden-test evaluation pipeline

<div class="small">
GitHub Actions · automated scoring · identical conditions for all submissions
</div>
</div>

<div class="arrow a2">↓</div>

<div class="pipeline pipe2">
Leaderboard + per-task metrics

<div class="small">
human vs. LLM · live updates
</div>
</div>

</div>

</body>
</html>`,
  },
  "fig2": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8">
<title>LLM Evaluation Pipeline</title>
<style>

body{
    margin:0;
    background:#fff;
    font-family:Arial, Helvetica, sans-serif;
}

.figure{
    width:1400px;
    padding-right:40px;
    box-sizing:border-box;
    height:560px;
    margin:auto;
    position:relative;
    background:white;
}

/* =======================================================
PHASE LABELS
======================================================= */

.phase{
    position:absolute;
    padding:4px 14px;
    border-radius:6px;
    font-size:13px;
    font-weight:700;
    border:1.5px solid;
}

.phase.input{
    left:40px;
    top:18px;
    background:#eaf1ff;
    border-color:#6b8cff;
    color:#1e47b8;
}

.phase.gen{
    left:420px;
    top:18px;
    background:#f2e8ff;
    border-color:#9f72ff;
    color:#6b2ec7;
}

.phase.exec{
    left:760px;
    top:18px;
    background:#e5fffa;
    border-color:#2ab9a0;
    color:#00695f;
}

.phase.score{
    left:1260px;
    top:18px;
    background:#fff0e2;
    border-color:#ff9d47;
    color:#b66200;
}

/* =======================================================
BOXES
======================================================= */

.box{
    position:absolute;
    border-radius:8px;
    border:2px solid;
    text-align:center;
    padding:8px 10px;
    font-size:12px;
    line-height:1.38;
    box-sizing:border-box;
}

.blue{
    background:#edf3ff;
    border-color:#6b8cff;
    color:#1e47b8;
}

.purple{
    background:#f5efff;
    border-color:#9f72ff;
    color:#6b2ec7;
}

.teal{
    background:#ebfffb;
    border-color:#2ab9a0;
    color:#00695f;
}

.orange{
    background:#fff1e6;
    border-color:#ff9d47;
    color:#b66200;
}

.gold{
    background:#fff7dc;
    border-color:#d4a300;
    color:#866400;
}

/* =======================================================
NODE POSITIONS
======================================================= */

#repo{
    left:40px;
    top:110px;
    width:165px;
    height:105px;
}

#slots{
    left:245px;
    top:126px;
    width:120px;
    height:72px;
}

#prompt{
    left:405px;
    top:118px;
    width:135px;
    height:88px;
}

#llm{
    left:585px;
    top:138px;
    width:78px;
    height:48px;
    padding-top:13px;
}

#plan{
    left:705px;
    top:132px;
    width:135px;
    height:60px;
    font-weight:700;
}

#execute{
    left:890px;
    top:126px;
    width:135px;
    height:72px;
}

#submit{
    left:1285px;
    top:126px;
    width:165px;
    height:72px;
}

#score{
    left:1260px;
    top:270px;
    width:215px;
    height:68px;
}

#leader{
    left:1260px;
    top:370px;
    width:215px;
    height:62px;
}

#repair{
    left:760px;
    top:278px;
    width:300px;
    height:72px;
}

/* =======================================================
DIAMOND
======================================================= */

#diamond{
    position:absolute;
    left:1090px;
    top:128px;
    width:72px;
    height:72px;
    transform:rotate(45deg);
    border:2px solid #9f72ff;
    background:#f5efff;
}

#diamond span{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) rotate(-45deg);
    font-size:12px;
    font-weight:700;
    color:#6b2ec7;
}

/* =======================================================
LABELS
======================================================= */

.label{
    position:absolute;
    font-size:12px;
    color:#666;
}

#nolabel{
    left:1205px;
    top:120px;
}

#yeslabel{
    left:1140px;
    top:212px;
}

/* =======================================================
SVG
======================================================= */

svg{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
}

</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>

<body>

<div class="figure fig-llm-pipeline">

<!-- phases -->
<div class="phase input">Input</div>
<div class="phase gen">Generation</div>
<div class="phase exec">Execution</div>
<div class="phase score">Scoring</div>

<!-- nodes -->

<div id="repo" class="box blue">
<b>Repository</b><br><br>
README<br>
Data<br>
Tree<br>
Submission Spec.
</div>

<div id="slots" class="box blue">
<b>Slot filling</b><br><br>
5 slots
</div>

<div id="prompt" class="box purple">
<b>Frozen</b><br>
<b>prompt</b><br><br>
zero-shot
</div>

<div id="llm" class="box purple">
<b>LLM</b>
</div>

<div id="plan" class="box teal">
&lt;plan&gt;<br>
&lt;code&gt;
</div>

<div id="execute" class="box teal">
<b>Execute</b><br><br>
CPU-only
</div>

<div id="diamond">
<span>error?</span>
</div>

<div id="submit" class="box orange">
<b>Submit</b><br><br>
predictions.csv
</div>

<div id="score" class="box orange">
<b>Hidden-test scoring</b><br><br>
task-specific metric
</div>

<div id="leader" class="box orange">
<b>Leaderboard</b><br><br>
live update
</div>

<div id="repair" class="box gold">
<b>Repair loop (k ≤ 5)</b><br><br>
traceback → LLM → re-generate
</div>

<div id="nolabel" class="label">no</div>
<div id="yeslabel" class="label">yes</div>

<!-- ===================================================
ARROWS
=================================================== -->

<svg viewBox="0 0 1400 560" aria-hidden="true">

<defs>

<marker id="blueArrow" markerWidth="8" markerHeight="8"
refX="7" refY="3.5" orient="auto">
<polygon points="0 0, 8 3.5, 0 7" fill="#1e47b8"/>
</marker>

<marker id="purpleArrow" markerWidth="8" markerHeight="8"
refX="7" refY="3.5" orient="auto">
<polygon points="0 0, 8 3.5, 0 7" fill="#6b2ec7"/>
</marker>

<marker id="tealArrow" markerWidth="8" markerHeight="8"
refX="7" refY="3.5" orient="auto">
<polygon points="0 0, 8 3.5, 0 7" fill="#00695f"/>
</marker>

<marker id="orangeArrow" markerWidth="8" markerHeight="8"
refX="7" refY="3.5" orient="auto">
<polygon points="0 0, 8 3.5, 0 7" fill="#b66200"/>
</marker>

</defs>

<!-- main flow -->

<line x1="205" y1="162" x2="245" y2="162"
stroke="#1e47b8" stroke-width="3"
marker-end="url(#blueArrow)"/>

<line x1="365" y1="162" x2="405" y2="162"
stroke="#1e47b8" stroke-width="3"
marker-end="url(#blueArrow)"/>

<line x1="540" y1="162" x2="585" y2="162"
stroke="#6b2ec7" stroke-width="3"
marker-end="url(#purpleArrow)"/>

<line x1="663" y1="162" x2="705" y2="162"
stroke="#6b2ec7" stroke-width="3"
marker-end="url(#purpleArrow)"/>

<line x1="840" y1="162" x2="890" y2="162"
stroke="#00695f" stroke-width="3"
marker-end="url(#tealArrow)"/>

<line x1="1025" y1="162" x2="1090" y2="162"
stroke="#00695f" stroke-width="3"
marker-end="url(#tealArrow)"/>

<!-- no branch (diamond → submit) -->

<line x1="1162" y1="164" x2="1285" y2="164"
stroke="#6b2ec7" stroke-width="3"
marker-end="url(#purpleArrow)"/>

<!-- yes branch (diamond → repair loop) -->

<path d="M 1126 200 L 1126 268 L 910 268"
fill="none"
stroke="#6b2ec7"
stroke-width="3"
marker-end="url(#purpleArrow)"/>

<!-- repair loop (repair → LLM) -->

<path d="M 760 314 L 624 314 L 624 186"
fill="none"
stroke="#6b2ec7"
stroke-width="3"
marker-end="url(#purpleArrow)"/>

<!-- scoring -->

<line x1="1368" y1="198" x2="1368" y2="270"
stroke="#b66200"
stroke-width="3"
marker-end="url(#orangeArrow)"/>

<line x1="1368" y1="338" x2="1368" y2="370"
stroke="#b66200"
stroke-width="3"
marker-end="url(#orangeArrow)"/>

</svg>

</div>

</body>
</html>`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8">
<title>LLM Evaluation Pipeline</title>
<style>

body{
    margin:0;
    background:#fff;
    font-family:Arial, Helvetica, sans-serif;
}

.figure{
    width:1400px;
    padding-right:40px;
    box-sizing:border-box;
    height:560px;
    margin:auto;
    position:relative;
    background:white;
}

/* =======================================================
PHASE LABELS
======================================================= */

.phase{
    position:absolute;
    padding:4px 14px;
    border-radius:6px;
    font-size:13px;
    font-weight:700;
    border:1.5px solid;
}

.phase.input{
    left:40px;
    top:18px;
    background:#eaf1ff;
    border-color:#6b8cff;
    color:#1e47b8;
}

.phase.gen{
    left:420px;
    top:18px;
    background:#f2e8ff;
    border-color:#9f72ff;
    color:#6b2ec7;
}

.phase.exec{
    left:760px;
    top:18px;
    background:#e5fffa;
    border-color:#2ab9a0;
    color:#00695f;
}

.phase.score{
    left:1260px;
    top:18px;
    background:#fff0e2;
    border-color:#ff9d47;
    color:#b66200;
}

/* =======================================================
BOXES
======================================================= */

.box{
    position:absolute;
    border-radius:8px;
    border:2px solid;
    text-align:center;
    padding:8px 10px;
    font-size:12px;
    line-height:1.38;
    box-sizing:border-box;
}

.blue{
    background:#edf3ff;
    border-color:#6b8cff;
    color:#1e47b8;
}

.purple{
    background:#f5efff;
    border-color:#9f72ff;
    color:#6b2ec7;
}

.teal{
    background:#ebfffb;
    border-color:#2ab9a0;
    color:#00695f;
}

.orange{
    background:#fff1e6;
    border-color:#ff9d47;
    color:#b66200;
}

.gold{
    background:#fff7dc;
    border-color:#d4a300;
    color:#866400;
}

/* =======================================================
NODE POSITIONS
======================================================= */

#repo{
    left:40px;
    top:110px;
    width:165px;
    height:105px;
}

#slots{
    left:245px;
    top:126px;
    width:120px;
    height:72px;
}

#prompt{
    left:405px;
    top:118px;
    width:135px;
    height:88px;
}

#llm{
    left:585px;
    top:138px;
    width:78px;
    height:48px;
    padding-top:13px;
}

#plan{
    left:705px;
    top:132px;
    width:135px;
    height:60px;
    font-weight:700;
}

#execute{
    left:890px;
    top:126px;
    width:135px;
    height:72px;
}

#submit{
    left:1285px;
    top:126px;
    width:165px;
    height:72px;
}

#score{
    left:1260px;
    top:270px;
    width:215px;
    height:68px;
}

#leader{
    left:1260px;
    top:370px;
    width:215px;
    height:62px;
}

#repair{
    left:760px;
    top:278px;
    width:300px;
    height:72px;
}

/* =======================================================
DIAMOND
======================================================= */

#diamond{
    position:absolute;
    left:1090px;
    top:128px;
    width:72px;
    height:72px;
    transform:rotate(45deg);
    border:2px solid #9f72ff;
    background:#f5efff;
}

#diamond span{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) rotate(-45deg);
    font-size:12px;
    font-weight:700;
    color:#6b2ec7;
}

/* =======================================================
LABELS
======================================================= */

.label{
    position:absolute;
    font-size:12px;
    color:#666;
}

#nolabel{
    left:1205px;
    top:120px;
}

#yeslabel{
    left:1140px;
    top:212px;
}

/* =======================================================
SVG
======================================================= */

svg{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
}

</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>

<body>

<div class="figure fig-llm-pipeline">

<!-- phases -->
<div class="phase input">Input</div>
<div class="phase gen">Generation</div>
<div class="phase exec">Execution</div>
<div class="phase score">Scoring</div>

<!-- nodes -->

<div id="repo" class="box blue">
<b>Repository</b><br><br>
README<br>
Data<br>
Tree<br>
Submission Spec.
</div>

<div id="slots" class="box blue">
<b>Slot filling</b><br><br>
5 slots
</div>

<div id="prompt" class="box purple">
<b>Frozen</b><br>
<b>prompt</b><br><br>
zero-shot
</div>

<div id="llm" class="box purple">
<b>LLM</b>
</div>

<div id="plan" class="box teal">
&lt;plan&gt;<br>
&lt;code&gt;
</div>

<div id="execute" class="box teal">
<b>Execute</b><br><br>
CPU-only
</div>

<div id="diamond">
<span>error?</span>
</div>

<div id="submit" class="box orange">
<b>Submit</b><br><br>
predictions.csv
</div>

<div id="score" class="box orange">
<b>Hidden-test scoring</b><br><br>
task-specific metric
</div>

<div id="leader" class="box orange">
<b>Leaderboard</b><br><br>
live update
</div>

<div id="repair" class="box gold">
<b>Repair loop (k ≤ 5)</b><br><br>
traceback → LLM → re-generate
</div>

<div id="nolabel" class="label">no</div>
<div id="yeslabel" class="label">yes</div>

<!-- ===================================================
ARROWS
=================================================== -->

<svg viewBox="0 0 1400 560" aria-hidden="true">

<defs>

<marker id="blueArrow" markerWidth="8" markerHeight="8"
refX="7" refY="3.5" orient="auto">
<polygon points="0 0, 8 3.5, 0 7" fill="#1e47b8"/>
</marker>

<marker id="purpleArrow" markerWidth="8" markerHeight="8"
refX="7" refY="3.5" orient="auto">
<polygon points="0 0, 8 3.5, 0 7" fill="#6b2ec7"/>
</marker>

<marker id="tealArrow" markerWidth="8" markerHeight="8"
refX="7" refY="3.5" orient="auto">
<polygon points="0 0, 8 3.5, 0 7" fill="#00695f"/>
</marker>

<marker id="orangeArrow" markerWidth="8" markerHeight="8"
refX="7" refY="3.5" orient="auto">
<polygon points="0 0, 8 3.5, 0 7" fill="#b66200"/>
</marker>

</defs>

<!-- main flow -->

<line x1="205" y1="162" x2="245" y2="162"
stroke="#1e47b8" stroke-width="3"
marker-end="url(#blueArrow)"/>

<line x1="365" y1="162" x2="405" y2="162"
stroke="#1e47b8" stroke-width="3"
marker-end="url(#blueArrow)"/>

<line x1="540" y1="162" x2="585" y2="162"
stroke="#6b2ec7" stroke-width="3"
marker-end="url(#purpleArrow)"/>

<line x1="663" y1="162" x2="705" y2="162"
stroke="#6b2ec7" stroke-width="3"
marker-end="url(#purpleArrow)"/>

<line x1="840" y1="162" x2="890" y2="162"
stroke="#00695f" stroke-width="3"
marker-end="url(#tealArrow)"/>

<line x1="1025" y1="162" x2="1090" y2="162"
stroke="#00695f" stroke-width="3"
marker-end="url(#tealArrow)"/>

<!-- no branch (diamond → submit) -->

<line x1="1162" y1="164" x2="1285" y2="164"
stroke="#6b2ec7" stroke-width="3"
marker-end="url(#purpleArrow)"/>

<!-- yes branch (diamond → repair loop) -->

<path d="M 1126 200 L 1126 268 L 910 268"
fill="none"
stroke="#6b2ec7"
stroke-width="3"
marker-end="url(#purpleArrow)"/>

<!-- repair loop (repair → LLM) -->

<path d="M 760 314 L 624 314 L 624 186"
fill="none"
stroke="#6b2ec7"
stroke-width="3"
marker-end="url(#purpleArrow)"/>

<!-- scoring -->

<line x1="1368" y1="198" x2="1368" y2="270"
stroke="#b66200"
stroke-width="3"
marker-end="url(#orangeArrow)"/>

<line x1="1368" y1="338" x2="1368" y2="370"
stroke="#b66200"
stroke-width="3"
marker-end="url(#orangeArrow)"/>

</svg>

</div>

</body>
</html>`,
  },
  "fig3": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8" />
<title>Human Results Figure</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
  * { box-sizing: border-box; }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fff;
    margin: 0;
    padding: 16px 20px;
  }

  .figure {
    width: 1400px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .row {
    display: flex;
    align-items: flex-start;
    gap: 22px;
  }

  .subplot-a {
    flex: 0 0 74%;
    width: 74%;
    min-width: 0;
  }

  .subplot-b {
    flex: 0 0 24%;
    width: 24%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-right: 32px;
    margin-right: 8px;
    box-sizing: border-box;
  }

  .panel {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px 12px;
    background: #fff;
  }

  .chart-slot {
    position: relative;
    width: 100%;
  }

  .chart-slot--class { height: 332px; }
  .chart-slot--sm { height: 158px; }

  .chart-slot canvas {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
  }

  .subtitle {
    text-align: center;
    margin-top: 8px;
    font-size: 15px;
    line-height: 1.4;
    color: #374151;
  }

  .caption {
    margin-top: 16px;
    font-size: 15px;
    line-height: 1.5;
    text-align: justify;
    color: #374151;
  }
</style>
    <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>
<body>

<div class="figure fig-human-results">

  <div class="row">

    <div class="subplot-a">
      <div class="panel">
        <div class="chart-slot chart-slot--class">
          <canvas id="classificationChart" aria-label="Classification competitions chart"></canvas>
        </div>
      </div>
      <div class="subtitle">
        <b>(a)</b> Classification competitions (F1 / Accuracy / AUC-ROC).
      </div>
    </div>

    <div class="subplot-b">
      <div class="panel">
        <div class="chart-slot chart-slot--sm">
          <canvas id="brainChart" aria-label="BrainAge MAE chart"></canvas>
        </div>
      </div>
      <div class="panel">
        <div class="chart-slot chart-slot--sm">
          <canvas id="mixChart" aria-label="Mix2Print NMAE chart"></canvas>
        </div>
      </div>
      <div class="subtitle">
        <b>(b)</b> Regression.
      </div>
    </div>

  </div>

  <div class="caption">
    <b>Figure.</b>
    Per-task human-performance statistics across all 18
    <i>GNN-CB</i> competitions: minimum (worst), average,
    maximum (best), and standard deviation of participant scores.
    The wide panel (a) reports the 16 classification competitions
    on a common 0–1 score axis, while panel (b) presents the two
    regression competitions separately because their MAE and NMAE
    metrics live on different scales.
  </div>

</div>

<script>
const embed = window.parent !== window;
const axisColor = '#57606a';
const gridColor = '#d0d7de';
const legendColor = '#1f2937';
const tickSize = embed ? 13 : 11;
const legendSize = embed ? 14 : 12;
const axisTitleSize = embed ? 14 : 12;

function notifyParentRefit() {
  if (!embed || !window.parent.GNNCB) return;
  try {
    const vp = window.frameElement && window.frameElement.closest('.figure-viewport');
    window.parent.GNNCB.fitAllFigureViewports();
    if (vp) window.parent.GNNCB.scheduleViewportRefits(vp);
  } catch (_) { /* ignore */ }
}

function scaleX() {
  return {
    ticks: {
      maxRotation: 45,
      minRotation: 45,
      font: { size: tickSize },
      color: axisColor
    },
    grid: { display: false, drawOnChartArea: false },
    border: { color: axisColor }
  };
}

function scaleY(title, opts) {
  return {
    min: opts.min,
    max: opts.max,
    title: {
      display: true,
      text: title,
      color: axisColor,
      font: { size: axisTitleSize }
    },
    ticks: {
      color: axisColor,
      font: { size: tickSize },
      stepSize: opts.stepSize
    },
    grid: { color: gridColor, drawOnChartArea: true },
    border: { color: axisColor }
  };
}

const labels = [
  'C01','C02','C03','C04','C05','C06','C07','C08',
  'C09','C10','C11','C12','C13','C15','C16','C18'
];

const commonDatasets = [
  {
    label: 'Low',
    data: [0.435,0.205,0.767,0.28,0.391,0.477,0.40,0.407,
      0.403,0.508,0.548,0.153,0.25,0.211,0.389,0.354],
    backgroundColor: '#4e79a7'
  },
  {
    label: 'Avg',
    data: [0.792,0.383,0.945,0.389,0.496,0.570,0.707,0.756,
      0.706,0.706,0.773,0.551,0.582,0.672,0.513,0.490],
    backgroundColor: '#59a14f'
  },
  {
    label: 'High',
    data: [0.900,0.537,0.980,0.600,0.674,0.822,0.830,0.996,
      0.891,0.891,0.933,0.742,0.790,0.793,0.627,0.565],
    backgroundColor: '#f28e2b'
  },
  {
    label: 'Std',
    data: [0.101,0.086,0.053,0.094,0.088,0.125,0.131,0.212,
      0.271,0.271,0.116,0.196,0.163,0.151,0.082,0.056],
    backgroundColor: '#e15759'
  }
];

const chartDone = { n: 0, need: 3 };

function onChartReady() {
  chartDone.n += 1;
  if (chartDone.n >= chartDone.need) {
    notifyParentRefit();
    setTimeout(notifyParentRefit, 150);
    setTimeout(notifyParentRefit, 600);
  }
}

new Chart(document.getElementById('classificationChart'), {
  type: 'bar',
  data: { labels, datasets: commonDatasets },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { onComplete: onChartReady },
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: legendSize }, color: legendColor }
      }
    },
    scales: {
      x: scaleX(),
      y: scaleY('Score', { min: 0, max: 1.05 })
    }
  }
});

new Chart(document.getElementById('brainChart'), {
  type: 'bar',
  data: {
    labels: ['C14'],
    datasets: [
      { label: 'Low', data: [4.984], backgroundColor: '#4e79a7' },
      { label: 'Avg', data: [6.531], backgroundColor: '#59a14f' },
      { label: 'High', data: [10.638], backgroundColor: '#f28e2b' },
      { label: 'Std', data: [1.474], backgroundColor: '#e15759' }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { onComplete: onChartReady },
    plugins: { legend: { display: false } },
    scales: {
      x: scaleX(),
      y: scaleY('MAE', { min: 0, max: 12, stepSize: 3 })
    }
  }
});

new Chart(document.getElementById('mixChart'), {
  type: 'bar',
  data: {
    labels: ['C17'],
    datasets: [
      { label: 'Low', data: [0.069], backgroundColor: '#4e79a7' },
      { label: 'Avg', data: [0.08], backgroundColor: '#59a14f' },
      { label: 'High', data: [0.147], backgroundColor: '#f28e2b' },
      { label: 'Std', data: [0.02], backgroundColor: '#e15759' }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { onComplete: onChartReady },
    plugins: { legend: { display: false } },
    scales: {
      x: scaleX(),
      y: scaleY('NMAE', { min: 0, max: 0.18, stepSize: 0.05 })
    }
  }
});
</script>

</body>
</html>
`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8" />
<title>Human Results Figure</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
  * { box-sizing: border-box; }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fff;
    margin: 0;
    padding: 16px 20px;
  }

  .figure {
    width: 1400px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .row {
    display: flex;
    align-items: flex-start;
    gap: 22px;
  }

  .subplot-a {
    flex: 0 0 74%;
    width: 74%;
    min-width: 0;
  }

  .subplot-b {
    flex: 0 0 24%;
    width: 24%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-right: 32px;
    margin-right: 8px;
    box-sizing: border-box;
  }

  .panel {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px 12px;
    background: #fff;
  }

  .chart-slot {
    position: relative;
    width: 100%;
  }

  .chart-slot--class { height: 332px; }
  .chart-slot--sm { height: 158px; }

  .chart-slot canvas {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
  }

  .subtitle {
    text-align: center;
    margin-top: 8px;
    font-size: 15px;
    line-height: 1.4;
    color: #374151;
  }

  .caption {
    margin-top: 16px;
    font-size: 15px;
    line-height: 1.5;
    text-align: justify;
    color: #374151;
  }
</style>
    <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>
<body>

<div class="figure fig-human-results">

  <div class="row">

    <div class="subplot-a">
      <div class="panel">
        <div class="chart-slot chart-slot--class">
          <canvas id="classificationChart" aria-label="Classification competitions chart"></canvas>
        </div>
      </div>
      <div class="subtitle">
        <b>(a)</b> Classification competitions (F1 / Accuracy / AUC-ROC).
      </div>
    </div>

    <div class="subplot-b">
      <div class="panel">
        <div class="chart-slot chart-slot--sm">
          <canvas id="brainChart" aria-label="BrainAge MAE chart"></canvas>
        </div>
      </div>
      <div class="panel">
        <div class="chart-slot chart-slot--sm">
          <canvas id="mixChart" aria-label="Mix2Print NMAE chart"></canvas>
        </div>
      </div>
      <div class="subtitle">
        <b>(b)</b> Regression.
      </div>
    </div>

  </div>

  <div class="caption">
    <b>Figure.</b>
    Per-task human-performance statistics across all 18
    <i>GNN-CB</i> competitions: minimum (worst), average,
    maximum (best), and standard deviation of participant scores.
    The wide panel (a) reports the 16 classification competitions
    on a common 0–1 score axis, while panel (b) presents the two
    regression competitions separately because their MAE and NMAE
    metrics live on different scales.
  </div>

</div>

<script>
const embed = window.parent !== window;
const axisColor = '#8b949e';
const gridColor = '#30363d';
const legendColor = '#c9d1d9';
const tickSize = embed ? 13 : 11;
const legendSize = embed ? 14 : 12;
const axisTitleSize = embed ? 14 : 12;

function notifyParentRefit() {
  if (!embed || !window.parent.GNNCB) return;
  try {
    const vp = window.frameElement && window.frameElement.closest('.figure-viewport');
    window.parent.GNNCB.fitAllFigureViewports();
    if (vp) window.parent.GNNCB.scheduleViewportRefits(vp);
  } catch (_) { /* ignore */ }
}

function scaleX() {
  return {
    ticks: {
      maxRotation: 45,
      minRotation: 45,
      font: { size: tickSize },
      color: axisColor
    },
    grid: { display: false, drawOnChartArea: false },
    border: { color: axisColor }
  };
}

function scaleY(title, opts) {
  return {
    min: opts.min,
    max: opts.max,
    title: {
      display: true,
      text: title,
      color: axisColor,
      font: { size: axisTitleSize }
    },
    ticks: {
      color: axisColor,
      font: { size: tickSize },
      stepSize: opts.stepSize
    },
    grid: { color: gridColor, drawOnChartArea: true },
    border: { color: axisColor }
  };
}

const labels = [
  'C01','C02','C03','C04','C05','C06','C07','C08',
  'C09','C10','C11','C12','C13','C15','C16','C18'
];

const commonDatasets = [
  {
    label: 'Low',
    data: [0.435,0.205,0.767,0.28,0.391,0.477,0.40,0.407,
      0.403,0.508,0.548,0.153,0.25,0.211,0.389,0.354],
    backgroundColor: '#4e79a7'
  },
  {
    label: 'Avg',
    data: [0.792,0.383,0.945,0.389,0.496,0.570,0.707,0.756,
      0.706,0.706,0.773,0.551,0.582,0.672,0.513,0.490],
    backgroundColor: '#59a14f'
  },
  {
    label: 'High',
    data: [0.900,0.537,0.980,0.600,0.674,0.822,0.830,0.996,
      0.891,0.891,0.933,0.742,0.790,0.793,0.627,0.565],
    backgroundColor: '#f28e2b'
  },
  {
    label: 'Std',
    data: [0.101,0.086,0.053,0.094,0.088,0.125,0.131,0.212,
      0.271,0.271,0.116,0.196,0.163,0.151,0.082,0.056],
    backgroundColor: '#e15759'
  }
];

const chartDone = { n: 0, need: 3 };

function onChartReady() {
  chartDone.n += 1;
  if (chartDone.n >= chartDone.need) {
    notifyParentRefit();
    setTimeout(notifyParentRefit, 150);
    setTimeout(notifyParentRefit, 600);
  }
}

new Chart(document.getElementById('classificationChart'), {
  type: 'bar',
  data: { labels, datasets: commonDatasets },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { onComplete: onChartReady },
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: legendSize }, color: legendColor }
      }
    },
    scales: {
      x: scaleX(),
      y: scaleY('Score', { min: 0, max: 1.05 })
    }
  }
});

new Chart(document.getElementById('brainChart'), {
  type: 'bar',
  data: {
    labels: ['C14'],
    datasets: [
      { label: 'Low', data: [4.984], backgroundColor: '#4e79a7' },
      { label: 'Avg', data: [6.531], backgroundColor: '#59a14f' },
      { label: 'High', data: [10.638], backgroundColor: '#f28e2b' },
      { label: 'Std', data: [1.474], backgroundColor: '#e15759' }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { onComplete: onChartReady },
    plugins: { legend: { display: false } },
    scales: {
      x: scaleX(),
      y: scaleY('MAE', { min: 0, max: 12, stepSize: 3 })
    }
  }
});

new Chart(document.getElementById('mixChart'), {
  type: 'bar',
  data: {
    labels: ['C17'],
    datasets: [
      { label: 'Low', data: [0.069], backgroundColor: '#4e79a7' },
      { label: 'Avg', data: [0.08], backgroundColor: '#59a14f' },
      { label: 'High', data: [0.147], backgroundColor: '#f28e2b' },
      { label: 'Std', data: [0.02], backgroundColor: '#e15759' }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { onComplete: onChartReady },
    plugins: { legend: { display: false } },
    scales: {
      x: scaleX(),
      y: scaleY('NMAE', { min: 0, max: 0.18, stepSize: 0.05 })
    }
  }
});
</script>

</body>
</html>
`,
  },
  "fig4": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8" />
<title>Figure 4 — LLM leaderboard</title>
<style>
  body { margin: 0; padding: 24px; font-family: Arial, Helvetica, sans-serif; background: #fff; }
  .figure { width: 1400px; margin: auto; }
  .panel {
    border: 1px solid #d0d7de;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }
  table { width: 100%; border-collapse: collapse; font-size: 14px; }
  th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
  th { background: #f6f8fa; font-weight: 700; color: #374151; }
  tr:last-child td { border-bottom: none; }
  .rank { font-weight: 700; color: #6b7280; width: 36px; }
  .model { font-weight: 600; }
  .sub { font-size: 12px; color: #6b7280; }
  .score { font-family: Consolas, monospace; font-size: 13px; }
  .gap { font-family: Consolas, monospace; font-weight: 600; }
  .caption { margin-top: 14px; font-size: 14px; color: #4b5563; line-height: 1.5; }
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>
<body>
<div class="figure fig-llm-leaderboard">
  <div class="panel">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Model</th>
          <th>Mode</th>
          <th>Mean |gap to human top|</th>
        </tr>
      </thead>
      <tbody id="lb-body"></tbody>
    </table>
  </div>
  <p class="caption">
    <b>Figure 4.</b> LLM leaderboard ranked by mean absolute gap to human top score across 17 evaluated competitions
    (lower is better). Full per-competition scores appear in the interactive leaderboard on the main site.
  </p>
</div>
<script>
const MODELS = [
  { rank: 1, name: 'Claude Opus 4.7†', sub: 'Anthropic · Agent', mode: 'Agent', meanGap: 0.148 },
  { rank: 2, name: 'Claude Opus 4.6', sub: 'Anthropic · Non-Agent', mode: 'Non-Agent', meanGap: 0.163 },
  { rank: 3, name: 'Gemini 2.5 Pro', sub: 'Google DeepMind', mode: 'Non-Agent', meanGap: 0.179 },
  { rank: 4, name: 'GPT-5.4 Codex†', sub: 'OpenAI · Agent', mode: 'Agent', meanGap: 0.182 },
  { rank: 5, name: 'Gemini-3 Flash', sub: 'Google DeepMind', mode: 'Non-Agent', meanGap: 0.174 },
  { rank: 6, name: 'Kimi k2.6', sub: 'Moonshot AI', mode: 'Non-Agent', meanGap: 0.198 },
  { rank: 7, name: 'DeepSeek-v4 Pro', sub: 'DeepSeek-AI', mode: 'Non-Agent', meanGap: 0.221 },
  { rank: 8, name: 'Qwen2.5-Coder 32B', sub: 'Alibaba Cloud', mode: 'Non-Agent', meanGap: 0.265 },
  { rank: 9, name: 'Llama-3.3 70B', sub: 'Meta AI', mode: 'Non-Agent', meanGap: 0.299 },
];
MODELS.sort((a, b) => a.meanGap - b.meanGap);
const tbody = document.getElementById('lb-body');
MODELS.forEach((m, i) => {
  const tr = document.createElement('tr');
  tr.innerHTML = \`
    <td class="rank">\${i + 1}</td>
    <td><div class="model">\${m.name}</div><div class="sub">\${m.sub}</div></td>
    <td>\${m.mode}</td>
    <td class="gap">\${m.meanGap.toFixed(3)}</td>\`;
  tbody.appendChild(tr);
});
</script>
</body>
</html>
`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8" />
<title>Figure 4 — LLM leaderboard</title>
<style>
  body { margin: 0; padding: 24px; font-family: Arial, Helvetica, sans-serif; background: #fff; }
  .figure { width: 1400px; margin: auto; }
  .panel {
    border: 1px solid #d0d7de;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }
  table { width: 100%; border-collapse: collapse; font-size: 14px; }
  th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
  th { background: #f6f8fa; font-weight: 700; color: #374151; }
  tr:last-child td { border-bottom: none; }
  .rank { font-weight: 700; color: #6b7280; width: 36px; }
  .model { font-weight: 600; }
  .sub { font-size: 12px; color: #6b7280; }
  .score { font-family: Consolas, monospace; font-size: 13px; }
  .gap { font-family: Consolas, monospace; font-weight: 600; }
  .caption { margin-top: 14px; font-size: 14px; color: #4b5563; line-height: 1.5; }
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>
<body>
<div class="figure fig-llm-leaderboard">
  <div class="panel">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Model</th>
          <th>Mode</th>
          <th>Mean |gap to human top|</th>
        </tr>
      </thead>
      <tbody id="lb-body"></tbody>
    </table>
  </div>
  <p class="caption">
    <b>Figure 4.</b> LLM leaderboard ranked by mean absolute gap to human top score across 17 evaluated competitions
    (lower is better). Full per-competition scores appear in the interactive leaderboard on the main site.
  </p>
</div>
<script>
const MODELS = [
  { rank: 1, name: 'Claude Opus 4.7†', sub: 'Anthropic · Agent', mode: 'Agent', meanGap: 0.148 },
  { rank: 2, name: 'Claude Opus 4.6', sub: 'Anthropic · Non-Agent', mode: 'Non-Agent', meanGap: 0.163 },
  { rank: 3, name: 'Gemini 2.5 Pro', sub: 'Google DeepMind', mode: 'Non-Agent', meanGap: 0.179 },
  { rank: 4, name: 'GPT-5.4 Codex†', sub: 'OpenAI · Agent', mode: 'Agent', meanGap: 0.182 },
  { rank: 5, name: 'Gemini-3 Flash', sub: 'Google DeepMind', mode: 'Non-Agent', meanGap: 0.174 },
  { rank: 6, name: 'Kimi k2.6', sub: 'Moonshot AI', mode: 'Non-Agent', meanGap: 0.198 },
  { rank: 7, name: 'DeepSeek-v4 Pro', sub: 'DeepSeek-AI', mode: 'Non-Agent', meanGap: 0.221 },
  { rank: 8, name: 'Qwen2.5-Coder 32B', sub: 'Alibaba Cloud', mode: 'Non-Agent', meanGap: 0.265 },
  { rank: 9, name: 'Llama-3.3 70B', sub: 'Meta AI', mode: 'Non-Agent', meanGap: 0.299 },
];
MODELS.sort((a, b) => a.meanGap - b.meanGap);
const tbody = document.getElementById('lb-body');
MODELS.forEach((m, i) => {
  const tr = document.createElement('tr');
  tr.innerHTML = \`
    <td class="rank">\${i + 1}</td>
    <td><div class="model">\${m.name}</div><div class="sub">\${m.sub}</div></td>
    <td>\${m.mode}</td>
    <td class="gap">\${m.meanGap.toFixed(3)}</td>\`;
  tbody.appendChild(tr);
});
</script>
</body>
</html>
`,
  },
  "fig5": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8" />
<title>Figure 5 — Gap to human top</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
  body { margin: 0; padding: 24px; font-family: Arial, Helvetica, sans-serif; background: #fff; }
  .figure { width: 1400px; margin: auto; }
  .panel {
    border: 1px solid #d0d7de;
    border-radius: 8px;
    padding: 16px 20px 8px;
    background: #fff;
  }
  .caption { margin-top: 14px; font-size: 14px; color: #4b5563; line-height: 1.5; }
  canvas { width: 100% !important; max-height: 420px; }
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>
<body>
<div class="figure fig-gap-analysis">
  <div class="panel">
    <canvas id="gapChart" height="400"></canvas>
  </div>
  <p class="caption">
    <b>Figure 5.</b> Mean absolute gap to human top score by model (17 competitions).
    Frontier reasoning models cluster below 0.20; open-source chat models exceed 0.26.
  </p>
</div>
<script>
const axisColor = '#57606a';
const gridColor = '#d0d7de';
const legendColor = '#1f2937';
new Chart(document.getElementById('gapChart'), {
  type: 'bar',
  data: {
    labels: models.map(m => m[0]),
    datasets: [{
      label: 'Mean |gap to human top|',
      data: models.map(m => m[1]),
      backgroundColor: '#4e79a7'
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: ctx => ctx.parsed.x.toFixed(3) } }
    },
    scales: {
      x: {
        min: 0,
        max: 0.35,
        title: { display: true, text: 'Mean gap (lower is better)', color: axisColor },
        ticks: { color: axisColor },
        grid: { color: gridColor }
      },
      y: {
        ticks: { color: axisColor, font: { size: 12 } },
        grid: { display: false }
      }
    }
  }
});
</script>
</body>
</html>
`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8" />
<title>Figure 5 — Gap to human top</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
  body { margin: 0; padding: 24px; font-family: Arial, Helvetica, sans-serif; background: #fff; }
  .figure { width: 1400px; margin: auto; }
  .panel {
    border: 1px solid #d0d7de;
    border-radius: 8px;
    padding: 16px 20px 8px;
    background: #fff;
  }
  .caption { margin-top: 14px; font-size: 14px; color: #4b5563; line-height: 1.5; }
  canvas { width: 100% !important; max-height: 420px; }
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>
<body>
<div class="figure fig-gap-analysis">
  <div class="panel">
    <canvas id="gapChart" height="400"></canvas>
  </div>
  <p class="caption">
    <b>Figure 5.</b> Mean absolute gap to human top score by model (17 competitions).
    Frontier reasoning models cluster below 0.20; open-source chat models exceed 0.26.
  </p>
</div>
<script>
const axisColor = '#8b949e';
const gridColor = '#30363d';
const legendColor = '#c9d1d9';
new Chart(document.getElementById('gapChart'), {
  type: 'bar',
  data: {
    labels: models.map(m => m[0]),
    datasets: [{
      label: 'Mean |gap to human top|',
      data: models.map(m => m[1]),
      backgroundColor: '#4e79a7'
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: ctx => ctx.parsed.x.toFixed(3) } }
    },
    scales: {
      x: {
        min: 0,
        max: 0.35,
        title: { display: true, text: 'Mean gap (lower is better)', color: axisColor },
        ticks: { color: axisColor },
        grid: { color: gridColor }
      },
      y: {
        ticks: { color: axisColor, font: { size: 12 } },
        grid: { display: false }
      }
    }
  }
});
</script>
</body>
</html>
`,
  },
  "fig6": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8" />
<title>Human Evaluation Pipeline</title>
<style>
  body{
    margin:0;
    padding:30px;
    background:#ffffff;
    font-family:Arial, Helvetica, sans-serif;
  }

  .figure{
    width:1500px;
    margin:auto;
  }

  svg{
    width:100%;
    height:auto;
  }

  .caption{
    margin-top:18px;
    font-size:15px;
    line-height:1.55;
    text-align:justify;
  }

  .tiny{ font-size:11px; }
  .small{ font-size:12px; }
  .bold{ font-weight:bold; }

</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>

<body>

<div class="figure fig-human-pipeline">

<svg viewBox="0 0 1500 520">

  <!-- ================================================= -->
  <!-- DEFINITIONS -->
  <!-- ================================================= -->

  <defs>

    <marker id="arrowBlue" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#4a7bd1"/>
    </marker>

    <marker id="arrowPurple" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#8a5fd3"/>
    </marker>

    <marker id="arrowTeal" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#27b7b0"/>
    </marker>

    <marker id="arrowOrange" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#ff8b42"/>
    </marker>

  </defs>

  <!-- ================================================= -->
  <!-- PHASE PILLS -->
  <!-- ================================================= -->

  <!-- Input -->
  <rect x="40" y="20" width="90" height="28"
        rx="6"
        fill="#dbeeff"
        stroke="#6bb6ff"/>

  <text x="85" y="38"
        text-anchor="middle"
        font-size="13"
        font-weight="bold"
        fill="#2f5f8d">
    Input
  </text>

  <!-- Development -->
  <rect x="510" y="20" width="130" height="28"
        rx="6"
        fill="#eee3ff"
        stroke="#a47ae8"/>

  <text x="575" y="38"
        text-anchor="middle"
        font-size="13"
        font-weight="bold"
        fill="#6f46b7">
    Development
  </text>

  <!-- Submission -->
  <rect x="940" y="20" width="120" height="28"
        rx="6"
        fill="#dffaf7"
        stroke="#43c7bd"/>

  <text x="1000" y="38"
        text-anchor="middle"
        font-size="13"
        font-weight="bold"
        fill="#14867e">
    Submission
  </text>

  <!-- Scoring -->
  <rect x="1240" y="20" width="100" height="28"
        rx="6"
        fill="#ffe8dc"
        stroke="#ff9b63"/>

  <text x="1290" y="38"
        text-anchor="middle"
        font-size="13"
        font-weight="bold"
        fill="#c96529">
    Scoring
  </text>

  <!-- ================================================= -->
  <!-- DIVIDERS -->
  <!-- ================================================= -->

  <line x1="190" y1="10" x2="190" y2="430"
        stroke="#cccccc"
        stroke-dasharray="6 5"/>

  <line x1="900" y1="10" x2="900" y2="430"
        stroke="#cccccc"
        stroke-dasharray="6 5"/>

  <line x1="1190" y1="10" x2="1190" y2="430"
        stroke="#cccccc"
        stroke-dasharray="6 5"/>

  <!-- ================================================= -->
  <!-- MAIN ROW -->
  <!-- ================================================= -->

  <!-- INPUT -->
  <rect x="35" y="110"
        width="130" height="90"
        rx="8"
        fill="#edf6ff"
        stroke="#6ca6df"
        stroke-width="1.5"/>

  <text x="100" y="138"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#28527d">
    Data files
  </text>

  <text x="100" y="160"
        text-anchor="middle"
        font-size="11"
        fill="#28527d">
    nodes · edges
  </text>

  <text x="100" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#28527d">
    adjacency · features
  </text>

  <!-- PLAN -->
  <rect x="240" y="110"
        width="145" height="95"
        rx="8"
        fill="#f3edff"
        stroke="#9a73dd"
        stroke-width="1.5"/>

  <text x="312" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#6438b0">
    Plan &amp; design
  </text>

  <text x="312" y="160"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    GNN-only
  </text>

  <text x="312" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    architecture
  </text>

  <text x="312" y="196"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    loss, metric
  </text>

  <!-- TRAIN -->
  <rect x="430" y="110"
        width="145" height="95"
        rx="8"
        fill="#f3edff"
        stroke="#9a73dd"
        stroke-width="1.5"/>

  <text x="502" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#6438b0">
    Train
  </text>

  <text x="502" y="160"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    seed = 25
  </text>

  <text x="502" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    3 CPU hrs
  </text>

  <!-- TUNE -->
  <rect x="620" y="110"
        width="145" height="95"
        rx="8"
        fill="#f3edff"
        stroke="#9a73dd"
        stroke-width="1.5"/>

  <text x="692" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#6438b0">
    HP tune
  </text>

  <text x="692" y="160"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    ≤ 5 runs
  </text>

  <text x="692" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    early stop
  </text>

  <!-- PREDICT -->
  <rect x="950" y="110"
        width="145" height="95"
        rx="8"
        fill="#e9fffc"
        stroke="#3ab8af"
        stroke-width="1.5"/>

  <text x="1022" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#157b74">
    Predict
  </text>

  <text x="1022" y="166"
        text-anchor="middle"
        font-size="11"
        fill="#157b74">
    predictions.csv
  </text>

  <!-- ENCRYPT -->
  <rect x="1125" y="105"
        width="170" height="105"
        rx="8"
        fill="#effffb"
        stroke="#3ab8af"
        stroke-width="1.5"/>

  <text x="1210" y="132"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#157b74">
    Encrypt
  </text>

  <text x="1210" y="158"
        text-anchor="middle"
        font-size="11"
        fill="#157b74">
    predictions.csv.enc
  </text>

  <text x="1210" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#157b74">
    metadata.json
  </text>

  <!-- UPLOAD -->
  <rect x="1330" y="110"
        width="160" height="95"
        rx="8"
        fill="#effffb"
        stroke="#3ab8af"
        stroke-width="1.5"/>

  <text x="1410" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#157b74">
    Upload to GitHub
  </text>

  <text x="1410" y="166"
        text-anchor="middle"
        font-size="11"
        fill="#157b74">
    push to fork branch
  </text>

  <!-- PR -->
  <rect x="1260" y="270"
        width="150" height="90"
        rx="8"
        fill="#fff1e8"
        stroke="#ff944f"
        stroke-width="1.5"/>

  <text x="1335" y="298"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#b85e22">
    Pull request
  </text>

  <text x="1335" y="322"
        text-anchor="middle"
        font-size="11"
        fill="#b85e22">
    against main repo
  </text>

  <!-- SCORE -->
  <rect x="930" y="270"
        width="260" height="90"
        rx="8"
        fill="#fff1e8"
        stroke="#ff944f"
        stroke-width="1.5"/>

  <text x="1060" y="298"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#b85e22">
    GitHub Actions scoring
  </text>

  <text x="1060" y="322"
        text-anchor="middle"
        font-size="11"
        fill="#b85e22">
    decrypt → score on hidden test
  </text>

  <!-- LEADER -->
  <rect x="1010" y="400"
        width="210" height="82"
        rx="8"
        fill="#fff1e8"
        stroke="#ff944f"
        stroke-width="1.5"/>

  <text x="1115" y="428"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#b85e22">
    Live leaderboard
  </text>

  <text x="1115" y="452"
        text-anchor="middle"
        font-size="11"
        fill="#b85e22">
    PR auto-closed
  </text>

  <!-- ================================================= -->
  <!-- DOCUMENTATION LOG -->
  <!-- ================================================= -->

  <rect x="280" y="320"
        width="500" height="90"
        rx="8"
        fill="#fff7ec"
        stroke="#e8b24f"
        stroke-width="1.5"/>

  <text x="530" y="348"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#9f6a00">
    Documentation log (maintained throughout Development)
  </text>

  <text x="530" y="375"
        text-anchor="middle"
        font-size="11"
        fill="#9f6a00">
    hyper. tuning · runtime · hardware · epoch
  </text>

  <!-- ================================================= -->
  <!-- ARROWS -->
  <!-- ================================================= -->

  <!-- input -> plan -->
  <line x1="165" y1="155"
        x2="240" y2="155"
        stroke="#4a7bd1"
        stroke-width="3"
        marker-end="url(#arrowBlue)"/>

  <!-- plan -> train -->
  <line x1="385" y1="155"
        x2="430" y2="155"
        stroke="#8a5fd3"
        stroke-width="3"
        marker-end="url(#arrowPurple)"/>

  <!-- train -> tune -->
  <line x1="575" y1="155"
        x2="620" y2="155"
        stroke="#8a5fd3"
        stroke-width="3"
        marker-end="url(#arrowPurple)"/>

  <!-- tune -> preds -->
  <line x1="765" y1="155"
        x2="950" y2="155"
        stroke="#27b7b0"
        stroke-width="3"
        marker-end="url(#arrowTeal)"/>

  <!-- preds -> encrypt -->
  <line x1="1095" y1="155"
        x2="1125" y2="155"
        stroke="#27b7b0"
        stroke-width="3"
        marker-end="url(#arrowTeal)"/>

  <!-- encrypt -> upload -->
  <line x1="1295" y1="155"
        x2="1330" y2="155"
        stroke="#27b7b0"
        stroke-width="3"
        marker-end="url(#arrowTeal)"/>

  <!-- upload down -->
  <line x1="1410" y1="205"
        x2="1410" y2="250"
        stroke="#ff8b42"
        stroke-width="3"/>

  <!-- upload -> pr -->
  <line x1="1410" y1="250"
        x2="1335" y2="250"
        stroke="#ff8b42"
        stroke-width="3"
        marker-end="url(#arrowOrange)"/>

  <!-- pr -> score -->
  <line x1="1260" y1="315"
        x2="1190" y2="315"
        stroke="#ff8b42"
        stroke-width="3"
        marker-end="url(#arrowOrange)"/>

  <!-- score -> leader -->
  <line x1="1060" y1="360"
        x2="1060" y2="400"
        stroke="#ff8b42"
        stroke-width="3"
        marker-end="url(#arrowOrange)"/>

  <!-- dashed docs -->
  <line x1="312" y1="205"
        x2="312" y2="320"
        stroke="#8a5fd3"
        stroke-width="2"
        stroke-dasharray="6 4"/>

  <line x1="502" y1="205"
        x2="502" y2="320"
        stroke="#8a5fd3"
        stroke-width="2"
        stroke-dasharray="6 4"/>

  <line x1="692" y1="205"
        x2="692" y2="320"
        stroke="#8a5fd3"
        stroke-width="2"
        stroke-dasharray="6 4"/>

</svg>

<div class="caption">
<b>Human evaluation pipeline of <i>GNN-CB</i>.</b>
Participants prepare graph data (nodes, edges, adjacency, and feature matrices)
from the released data files, then design and train a GNN-only solution under
fixed reproducibility constraints (seed = 25, three CPU hours, at most five
hyperparameter-tuning runs, early stopping permitted). They generate a
<code>predictions.csv</code> file, encrypt it locally into
<code>predictions.csv.enc</code> together with a
<code>metadata.json</code>, push the encrypted submission to their GitHub fork,
and open a pull request against the main repository. An automated GitHub Actions
workflow decrypts the submission, scores it against the hidden test labels,
updates the live leaderboard, and closes the pull request.
</div>

</div>

</body>
</html>`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8" />
<title>Human Evaluation Pipeline</title>
<style>
  body{
    margin:0;
    padding:30px;
    background:#ffffff;
    font-family:Arial, Helvetica, sans-serif;
  }

  .figure{
    width:1500px;
    margin:auto;
  }

  svg{
    width:100%;
    height:auto;
  }

  .caption{
    margin-top:18px;
    font-size:15px;
    line-height:1.55;
    text-align:justify;
  }

  .tiny{ font-size:11px; }
  .small{ font-size:12px; }
  .bold{ font-weight:bold; }

</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>

<body>

<div class="figure fig-human-pipeline">

<svg viewBox="0 0 1500 520">

  <!-- ================================================= -->
  <!-- DEFINITIONS -->
  <!-- ================================================= -->

  <defs>

    <marker id="arrowBlue" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#4a7bd1"/>
    </marker>

    <marker id="arrowPurple" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#8a5fd3"/>
    </marker>

    <marker id="arrowTeal" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#27b7b0"/>
    </marker>

    <marker id="arrowOrange" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#ff8b42"/>
    </marker>

  </defs>

  <!-- ================================================= -->
  <!-- PHASE PILLS -->
  <!-- ================================================= -->

  <!-- Input -->
  <rect x="40" y="20" width="90" height="28"
        rx="6"
        fill="#dbeeff"
        stroke="#6bb6ff"/>

  <text x="85" y="38"
        text-anchor="middle"
        font-size="13"
        font-weight="bold"
        fill="#2f5f8d">
    Input
  </text>

  <!-- Development -->
  <rect x="510" y="20" width="130" height="28"
        rx="6"
        fill="#eee3ff"
        stroke="#a47ae8"/>

  <text x="575" y="38"
        text-anchor="middle"
        font-size="13"
        font-weight="bold"
        fill="#6f46b7">
    Development
  </text>

  <!-- Submission -->
  <rect x="940" y="20" width="120" height="28"
        rx="6"
        fill="#dffaf7"
        stroke="#43c7bd"/>

  <text x="1000" y="38"
        text-anchor="middle"
        font-size="13"
        font-weight="bold"
        fill="#14867e">
    Submission
  </text>

  <!-- Scoring -->
  <rect x="1240" y="20" width="100" height="28"
        rx="6"
        fill="#ffe8dc"
        stroke="#ff9b63"/>

  <text x="1290" y="38"
        text-anchor="middle"
        font-size="13"
        font-weight="bold"
        fill="#c96529">
    Scoring
  </text>

  <!-- ================================================= -->
  <!-- DIVIDERS -->
  <!-- ================================================= -->

  <line x1="190" y1="10" x2="190" y2="430"
        stroke="#cccccc"
        stroke-dasharray="6 5"/>

  <line x1="900" y1="10" x2="900" y2="430"
        stroke="#cccccc"
        stroke-dasharray="6 5"/>

  <line x1="1190" y1="10" x2="1190" y2="430"
        stroke="#cccccc"
        stroke-dasharray="6 5"/>

  <!-- ================================================= -->
  <!-- MAIN ROW -->
  <!-- ================================================= -->

  <!-- INPUT -->
  <rect x="35" y="110"
        width="130" height="90"
        rx="8"
        fill="#edf6ff"
        stroke="#6ca6df"
        stroke-width="1.5"/>

  <text x="100" y="138"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#28527d">
    Data files
  </text>

  <text x="100" y="160"
        text-anchor="middle"
        font-size="11"
        fill="#28527d">
    nodes · edges
  </text>

  <text x="100" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#28527d">
    adjacency · features
  </text>

  <!-- PLAN -->
  <rect x="240" y="110"
        width="145" height="95"
        rx="8"
        fill="#f3edff"
        stroke="#9a73dd"
        stroke-width="1.5"/>

  <text x="312" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#6438b0">
    Plan &amp; design
  </text>

  <text x="312" y="160"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    GNN-only
  </text>

  <text x="312" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    architecture
  </text>

  <text x="312" y="196"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    loss, metric
  </text>

  <!-- TRAIN -->
  <rect x="430" y="110"
        width="145" height="95"
        rx="8"
        fill="#f3edff"
        stroke="#9a73dd"
        stroke-width="1.5"/>

  <text x="502" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#6438b0">
    Train
  </text>

  <text x="502" y="160"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    seed = 25
  </text>

  <text x="502" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    3 CPU hrs
  </text>

  <!-- TUNE -->
  <rect x="620" y="110"
        width="145" height="95"
        rx="8"
        fill="#f3edff"
        stroke="#9a73dd"
        stroke-width="1.5"/>

  <text x="692" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#6438b0">
    HP tune
  </text>

  <text x="692" y="160"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    ≤ 5 runs
  </text>

  <text x="692" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#6438b0">
    early stop
  </text>

  <!-- PREDICT -->
  <rect x="950" y="110"
        width="145" height="95"
        rx="8"
        fill="#e9fffc"
        stroke="#3ab8af"
        stroke-width="1.5"/>

  <text x="1022" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#157b74">
    Predict
  </text>

  <text x="1022" y="166"
        text-anchor="middle"
        font-size="11"
        fill="#157b74">
    predictions.csv
  </text>

  <!-- ENCRYPT -->
  <rect x="1125" y="105"
        width="170" height="105"
        rx="8"
        fill="#effffb"
        stroke="#3ab8af"
        stroke-width="1.5"/>

  <text x="1210" y="132"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#157b74">
    Encrypt
  </text>

  <text x="1210" y="158"
        text-anchor="middle"
        font-size="11"
        fill="#157b74">
    predictions.csv.enc
  </text>

  <text x="1210" y="178"
        text-anchor="middle"
        font-size="11"
        fill="#157b74">
    metadata.json
  </text>

  <!-- UPLOAD -->
  <rect x="1330" y="110"
        width="160" height="95"
        rx="8"
        fill="#effffb"
        stroke="#3ab8af"
        stroke-width="1.5"/>

  <text x="1410" y="136"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#157b74">
    Upload to GitHub
  </text>

  <text x="1410" y="166"
        text-anchor="middle"
        font-size="11"
        fill="#157b74">
    push to fork branch
  </text>

  <!-- PR -->
  <rect x="1260" y="270"
        width="150" height="90"
        rx="8"
        fill="#fff1e8"
        stroke="#ff944f"
        stroke-width="1.5"/>

  <text x="1335" y="298"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#b85e22">
    Pull request
  </text>

  <text x="1335" y="322"
        text-anchor="middle"
        font-size="11"
        fill="#b85e22">
    against main repo
  </text>

  <!-- SCORE -->
  <rect x="930" y="270"
        width="260" height="90"
        rx="8"
        fill="#fff1e8"
        stroke="#ff944f"
        stroke-width="1.5"/>

  <text x="1060" y="298"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#b85e22">
    GitHub Actions scoring
  </text>

  <text x="1060" y="322"
        text-anchor="middle"
        font-size="11"
        fill="#b85e22">
    decrypt → score on hidden test
  </text>

  <!-- LEADER -->
  <rect x="1010" y="400"
        width="210" height="82"
        rx="8"
        fill="#fff1e8"
        stroke="#ff944f"
        stroke-width="1.5"/>

  <text x="1115" y="428"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#b85e22">
    Live leaderboard
  </text>

  <text x="1115" y="452"
        text-anchor="middle"
        font-size="11"
        fill="#b85e22">
    PR auto-closed
  </text>

  <!-- ================================================= -->
  <!-- DOCUMENTATION LOG -->
  <!-- ================================================= -->

  <rect x="280" y="320"
        width="500" height="90"
        rx="8"
        fill="#fff7ec"
        stroke="#e8b24f"
        stroke-width="1.5"/>

  <text x="530" y="348"
        text-anchor="middle"
        font-size="12"
        font-weight="bold"
        fill="#9f6a00">
    Documentation log (maintained throughout Development)
  </text>

  <text x="530" y="375"
        text-anchor="middle"
        font-size="11"
        fill="#9f6a00">
    hyper. tuning · runtime · hardware · epoch
  </text>

  <!-- ================================================= -->
  <!-- ARROWS -->
  <!-- ================================================= -->

  <!-- input -> plan -->
  <line x1="165" y1="155"
        x2="240" y2="155"
        stroke="#4a7bd1"
        stroke-width="3"
        marker-end="url(#arrowBlue)"/>

  <!-- plan -> train -->
  <line x1="385" y1="155"
        x2="430" y2="155"
        stroke="#8a5fd3"
        stroke-width="3"
        marker-end="url(#arrowPurple)"/>

  <!-- train -> tune -->
  <line x1="575" y1="155"
        x2="620" y2="155"
        stroke="#8a5fd3"
        stroke-width="3"
        marker-end="url(#arrowPurple)"/>

  <!-- tune -> preds -->
  <line x1="765" y1="155"
        x2="950" y2="155"
        stroke="#27b7b0"
        stroke-width="3"
        marker-end="url(#arrowTeal)"/>

  <!-- preds -> encrypt -->
  <line x1="1095" y1="155"
        x2="1125" y2="155"
        stroke="#27b7b0"
        stroke-width="3"
        marker-end="url(#arrowTeal)"/>

  <!-- encrypt -> upload -->
  <line x1="1295" y1="155"
        x2="1330" y2="155"
        stroke="#27b7b0"
        stroke-width="3"
        marker-end="url(#arrowTeal)"/>

  <!-- upload down -->
  <line x1="1410" y1="205"
        x2="1410" y2="250"
        stroke="#ff8b42"
        stroke-width="3"/>

  <!-- upload -> pr -->
  <line x1="1410" y1="250"
        x2="1335" y2="250"
        stroke="#ff8b42"
        stroke-width="3"
        marker-end="url(#arrowOrange)"/>

  <!-- pr -> score -->
  <line x1="1260" y1="315"
        x2="1190" y2="315"
        stroke="#ff8b42"
        stroke-width="3"
        marker-end="url(#arrowOrange)"/>

  <!-- score -> leader -->
  <line x1="1060" y1="360"
        x2="1060" y2="400"
        stroke="#ff8b42"
        stroke-width="3"
        marker-end="url(#arrowOrange)"/>

  <!-- dashed docs -->
  <line x1="312" y1="205"
        x2="312" y2="320"
        stroke="#8a5fd3"
        stroke-width="2"
        stroke-dasharray="6 4"/>

  <line x1="502" y1="205"
        x2="502" y2="320"
        stroke="#8a5fd3"
        stroke-width="2"
        stroke-dasharray="6 4"/>

  <line x1="692" y1="205"
        x2="692" y2="320"
        stroke="#8a5fd3"
        stroke-width="2"
        stroke-dasharray="6 4"/>

</svg>

<div class="caption">
<b>Human evaluation pipeline of <i>GNN-CB</i>.</b>
Participants prepare graph data (nodes, edges, adjacency, and feature matrices)
from the released data files, then design and train a GNN-only solution under
fixed reproducibility constraints (seed = 25, three CPU hours, at most five
hyperparameter-tuning runs, early stopping permitted). They generate a
<code>predictions.csv</code> file, encrypt it locally into
<code>predictions.csv.enc</code> together with a
<code>metadata.json</code>, push the encrypted submission to their GitHub fork,
and open a pull request against the main repository. An automated GitHub Actions
workflow decrypts the submission, scores it against the hidden test labels,
updates the live leaderboard, and closes the pull request.
</div>

</div>

</body>
</html>`,
  },
  "fig7": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8">
<title>Frozen Prompt Construction</title>
<style>
  body{
    margin:0;
    background:#ffffff;
    font-family:Arial, Helvetica, sans-serif;
  }

  .figure-wrap{
    width:1400px;
    margin:30px auto;
  }

  svg{
    width:100%;
    height:auto;
  }

  /* ─────────────────────────────
     TYPOGRAPHY
  ───────────────────────────── */
  .tiny{
    font-size:12px;
    fill:#333;
  }

  .small{
    font-size:13px;
    fill:#333;
  }

  .title{
    font-size:15px;
    font-weight:700;
    fill:#222;
  }

  .mono{
    font-family:"Courier New", monospace;
  }

  .bold{
    font-weight:700;
  }

  .italic{
    font-style:italic;
  }

  /* ─────────────────────────────
     BOXES
  ───────────────────────────── */

  .ibox{
    fill:#edf5ff;
    stroke:#5f95d6;
    stroke-width:1.6;
  }

  .gbox{
    fill:#f3efff;
    stroke:#7c63c9;
    stroke-width:1.6;
  }

  .tbox{
    fill:#eefbf8;
    stroke:#4fae9b;
    stroke-width:1.6;
  }

  .ebox{
    fill:#eef8f0;
    stroke:#56a764;
    stroke-width:1.6;
  }

  .rounded{
    rx:10;
    ry:10;
  }

  .stag{
    fill:#f6f1ff;
    stroke:#8a73d1;
    stroke-width:1.1;
  }

  .planTag{
    fill:#dff7f2;
    stroke:#4fae9b;
    stroke-width:1.1;
  }

  .dashed-highlight{
    fill:none;
    stroke:#9b8ad8;
    stroke-width:1.2;
    stroke-dasharray:5 4;
  }

  /* ─────────────────────────────
     ARROWS
  ───────────────────────────── */

  .arrow-blue{
    stroke:#5f95d6;
    stroke-width:2.1;
    fill:none;
  }

  .arrow-purple{
    stroke:#7c63c9;
    stroke-width:2.1;
    fill:none;
  }

  .arrow-teal{
    stroke:#4fae9b;
    stroke-width:2.1;
    fill:none;
  }

  .arrow-label{
    font-size:11px;
    fill:#777;
  }

  .caption{
    width:1200px;
    margin:12px auto 0;
    text-align:center;
    font-size:14px;
    line-height:1.5;
    color:#222;
  }
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>

<body>

<div class="figure-wrap fig-frozen-prompt">

<svg viewBox="0 0 1400 360">

  <!-- Arrow heads -->
  <defs>

    <marker id="arrowBlue" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#5f95d6"/>
    </marker>

    <marker id="arrowPurple" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#7c63c9"/>
    </marker>

    <marker id="arrowTeal" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#4fae9b"/>
    </marker>

  </defs>

  <!-- ===================================================== -->
  <!-- Repository -->
  <!-- ===================================================== -->

  <rect x="40" y="70" width="210" height="220"
        class="ibox rounded"/>

  <text x="145" y="98" text-anchor="middle"
        class="title">Repository</text>

  <text x="65" y="132" class="tiny mono">README.md</text>
  <text x="65" y="156" class="tiny mono">/data/</text>
  <text x="65" y="180" class="tiny mono">tree.txt</text>
  <text x="65" y="204" class="tiny mono">submit_spec.md</text>
  <text x="65" y="228" class="tiny mono">requirements.txt</text>
  <text x="65" y="252" class="tiny mono">.github/workflow/</text>

  <!-- ===================================================== -->
  <!-- Slots -->
  <!-- ===================================================== -->

  <rect x="330" y="70" width="250" height="220"
        class="gbox rounded"/>

  <text x="455" y="98" text-anchor="middle"
        class="title">prompt.md</text>

  <text x="455" y="122" text-anchor="middle"
        class="tiny italic">slot filling</text>

  <!-- slot tags -->
  <rect x="390" y="142" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="158" text-anchor="middle"
        class="tiny mono">{{README}}</text>

  <rect x="390" y="174" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="190" text-anchor="middle"
        class="tiny mono">{{DATA}}</text>

  <rect x="390" y="206" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="222" text-anchor="middle"
        class="tiny mono">{{TREE}}</text>

  <rect x="390" y="238" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="254" text-anchor="middle"
        class="tiny mono">{{SUBMIT}}</text>

  <rect x="390" y="270" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="286" text-anchor="middle"
        class="tiny mono">{{REQS}}</text>

  <!-- ===================================================== -->
  <!-- Frozen Prompt -->
  <!-- ===================================================== -->

  <rect x="670" y="70" width="220" height="220"
        class="gbox rounded"/>

  <!-- dashed highlight -->
  <rect x="660" y="60" width="240" height="240"
        rx="12" ry="12"
        class="dashed-highlight"/>

  <text x="780" y="98" text-anchor="middle"
        class="title">Frozen prompt</text>

  <text x="780" y="132" text-anchor="middle"
        class="tiny">task-agnostic</text>

  <text x="780" y="156" text-anchor="middle"
        class="tiny">never modified</text>

  <text x="780" y="180" text-anchor="middle"
        class="tiny">shared across</text>

  <text x="780" y="204" text-anchor="middle"
        class="tiny">all 18 competitions</text>

  <text x="780" y="244" text-anchor="middle"
        class="tiny italic">zero-shot</text>

  <!-- ===================================================== -->
  <!-- LLM -->
  <!-- ===================================================== -->

  <rect x="980" y="70" width="210" height="220"
        class="tbox rounded"/>

  <text x="1085" y="98" text-anchor="middle"
        class="title">LLM</text>

  <text x="1085" y="145" text-anchor="middle"
        class="tiny">GPT-5.4</text>

  <text x="1085" y="170" text-anchor="middle"
        class="tiny">Claude Opus</text>

  <text x="1085" y="195" text-anchor="middle"
        class="tiny">Gemini 2.5</text>

  <text x="1085" y="220" text-anchor="middle"
        class="tiny">Llama-3-70B</text>

  <!-- ===================================================== -->
  <!-- Output -->
  <!-- ===================================================== -->

  <rect x="1260" y="70" width="220" height="220"
        class="ebox rounded"/>

  <text x="1370" y="98" text-anchor="middle"
        class="title">Output</text>

  <!-- plan -->
  <rect x="1315" y="140" width="110" height="28"
        rx="5" ry="5" class="planTag"/>

  <text x="1370" y="159" text-anchor="middle"
        class="tiny mono bold">&lt;plan&gt;</text>

  <!-- code -->
  <rect x="1315" y="180" width="110" height="28"
        rx="5" ry="5" class="planTag"/>

  <text x="1370" y="199" text-anchor="middle"
        class="tiny mono bold">&lt;code&gt;</text>

  <text x="1370" y="242" text-anchor="middle"
        class="tiny">standalone</text>

  <text x="1370" y="264" text-anchor="middle"
        class="tiny">executable</text>

  <!-- ===================================================== -->
  <!-- ARROWS -->
  <!-- ===================================================== -->

  <!-- repo -> slots -->
  <line x1="250" y1="180" x2="330" y2="180"
        class="arrow-blue"
        marker-end="url(#arrowBlue)"/>

  <text x="290" y="166" text-anchor="middle"
        class="arrow-label">extract</text>

  <!-- slots -> frozen -->
  <line x1="580" y1="180" x2="670" y2="180"
        class="arrow-purple"
        marker-end="url(#arrowPurple)"/>

  <text x="625" y="166" text-anchor="middle"
        class="arrow-label">instantiate</text>

  <!-- frozen -> llm -->
  <line x1="890" y1="180" x2="980" y2="180"
        class="arrow-purple"
        marker-end="url(#arrowPurple)"/>

  <text x="935" y="166" text-anchor="middle"
        class="arrow-label">prompt</text>

  <!-- llm -> output -->
  <line x1="1190" y1="180" x2="1260" y2="180"
        class="arrow-teal"
        marker-end="url(#arrowTeal)"/>

  <text x="1225" y="166" text-anchor="middle"
        class="arrow-label">generate</text>

</svg>

<div class="caption">
A frozen prompt construction is instantiated from the repository and
then passed to the LLM, which outputs a plan and executable code.
</div>

</div>

</body>
</html>`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8">
<title>Frozen Prompt Construction</title>
<style>
  body{
    margin:0;
    background:#ffffff;
    font-family:Arial, Helvetica, sans-serif;
  }

  .figure-wrap{
    width:1400px;
    margin:30px auto;
  }

  svg{
    width:100%;
    height:auto;
  }

  /* ─────────────────────────────
     TYPOGRAPHY
  ───────────────────────────── */
  .tiny{
    font-size:12px;
    fill:#333;
  }

  .small{
    font-size:13px;
    fill:#333;
  }

  .title{
    font-size:15px;
    font-weight:700;
    fill:#222;
  }

  .mono{
    font-family:"Courier New", monospace;
  }

  .bold{
    font-weight:700;
  }

  .italic{
    font-style:italic;
  }

  /* ─────────────────────────────
     BOXES
  ───────────────────────────── */

  .ibox{
    fill:#edf5ff;
    stroke:#5f95d6;
    stroke-width:1.6;
  }

  .gbox{
    fill:#f3efff;
    stroke:#7c63c9;
    stroke-width:1.6;
  }

  .tbox{
    fill:#eefbf8;
    stroke:#4fae9b;
    stroke-width:1.6;
  }

  .ebox{
    fill:#eef8f0;
    stroke:#56a764;
    stroke-width:1.6;
  }

  .rounded{
    rx:10;
    ry:10;
  }

  .stag{
    fill:#f6f1ff;
    stroke:#8a73d1;
    stroke-width:1.1;
  }

  .planTag{
    fill:#dff7f2;
    stroke:#4fae9b;
    stroke-width:1.1;
  }

  .dashed-highlight{
    fill:none;
    stroke:#9b8ad8;
    stroke-width:1.2;
    stroke-dasharray:5 4;
  }

  /* ─────────────────────────────
     ARROWS
  ───────────────────────────── */

  .arrow-blue{
    stroke:#5f95d6;
    stroke-width:2.1;
    fill:none;
  }

  .arrow-purple{
    stroke:#7c63c9;
    stroke-width:2.1;
    fill:none;
  }

  .arrow-teal{
    stroke:#4fae9b;
    stroke-width:2.1;
    fill:none;
  }

  .arrow-label{
    font-size:11px;
    fill:#777;
  }

  .caption{
    width:1200px;
    margin:12px auto 0;
    text-align:center;
    font-size:14px;
    line-height:1.5;
    color:#222;
  }
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>

<body>

<div class="figure-wrap fig-frozen-prompt">

<svg viewBox="0 0 1400 360">

  <!-- Arrow heads -->
  <defs>

    <marker id="arrowBlue" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#5f95d6"/>
    </marker>

    <marker id="arrowPurple" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#7c63c9"/>
    </marker>

    <marker id="arrowTeal" markerWidth="10" markerHeight="10"
            refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6 Z" fill="#4fae9b"/>
    </marker>

  </defs>

  <!-- ===================================================== -->
  <!-- Repository -->
  <!-- ===================================================== -->

  <rect x="40" y="70" width="210" height="220"
        class="ibox rounded"/>

  <text x="145" y="98" text-anchor="middle"
        class="title">Repository</text>

  <text x="65" y="132" class="tiny mono">README.md</text>
  <text x="65" y="156" class="tiny mono">/data/</text>
  <text x="65" y="180" class="tiny mono">tree.txt</text>
  <text x="65" y="204" class="tiny mono">submit_spec.md</text>
  <text x="65" y="228" class="tiny mono">requirements.txt</text>
  <text x="65" y="252" class="tiny mono">.github/workflow/</text>

  <!-- ===================================================== -->
  <!-- Slots -->
  <!-- ===================================================== -->

  <rect x="330" y="70" width="250" height="220"
        class="gbox rounded"/>

  <text x="455" y="98" text-anchor="middle"
        class="title">prompt.md</text>

  <text x="455" y="122" text-anchor="middle"
        class="tiny italic">slot filling</text>

  <!-- slot tags -->
  <rect x="390" y="142" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="158" text-anchor="middle"
        class="tiny mono">{{README}}</text>

  <rect x="390" y="174" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="190" text-anchor="middle"
        class="tiny mono">{{DATA}}</text>

  <rect x="390" y="206" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="222" text-anchor="middle"
        class="tiny mono">{{TREE}}</text>

  <rect x="390" y="238" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="254" text-anchor="middle"
        class="tiny mono">{{SUBMIT}}</text>

  <rect x="390" y="270" width="130" height="24"
        rx="5" ry="5" class="stag"/>
  <text x="455" y="286" text-anchor="middle"
        class="tiny mono">{{REQS}}</text>

  <!-- ===================================================== -->
  <!-- Frozen Prompt -->
  <!-- ===================================================== -->

  <rect x="670" y="70" width="220" height="220"
        class="gbox rounded"/>

  <!-- dashed highlight -->
  <rect x="660" y="60" width="240" height="240"
        rx="12" ry="12"
        class="dashed-highlight"/>

  <text x="780" y="98" text-anchor="middle"
        class="title">Frozen prompt</text>

  <text x="780" y="132" text-anchor="middle"
        class="tiny">task-agnostic</text>

  <text x="780" y="156" text-anchor="middle"
        class="tiny">never modified</text>

  <text x="780" y="180" text-anchor="middle"
        class="tiny">shared across</text>

  <text x="780" y="204" text-anchor="middle"
        class="tiny">all 18 competitions</text>

  <text x="780" y="244" text-anchor="middle"
        class="tiny italic">zero-shot</text>

  <!-- ===================================================== -->
  <!-- LLM -->
  <!-- ===================================================== -->

  <rect x="980" y="70" width="210" height="220"
        class="tbox rounded"/>

  <text x="1085" y="98" text-anchor="middle"
        class="title">LLM</text>

  <text x="1085" y="145" text-anchor="middle"
        class="tiny">GPT-5.4</text>

  <text x="1085" y="170" text-anchor="middle"
        class="tiny">Claude Opus</text>

  <text x="1085" y="195" text-anchor="middle"
        class="tiny">Gemini 2.5</text>

  <text x="1085" y="220" text-anchor="middle"
        class="tiny">Llama-3-70B</text>

  <!-- ===================================================== -->
  <!-- Output -->
  <!-- ===================================================== -->

  <rect x="1260" y="70" width="220" height="220"
        class="ebox rounded"/>

  <text x="1370" y="98" text-anchor="middle"
        class="title">Output</text>

  <!-- plan -->
  <rect x="1315" y="140" width="110" height="28"
        rx="5" ry="5" class="planTag"/>

  <text x="1370" y="159" text-anchor="middle"
        class="tiny mono bold">&lt;plan&gt;</text>

  <!-- code -->
  <rect x="1315" y="180" width="110" height="28"
        rx="5" ry="5" class="planTag"/>

  <text x="1370" y="199" text-anchor="middle"
        class="tiny mono bold">&lt;code&gt;</text>

  <text x="1370" y="242" text-anchor="middle"
        class="tiny">standalone</text>

  <text x="1370" y="264" text-anchor="middle"
        class="tiny">executable</text>

  <!-- ===================================================== -->
  <!-- ARROWS -->
  <!-- ===================================================== -->

  <!-- repo -> slots -->
  <line x1="250" y1="180" x2="330" y2="180"
        class="arrow-blue"
        marker-end="url(#arrowBlue)"/>

  <text x="290" y="166" text-anchor="middle"
        class="arrow-label">extract</text>

  <!-- slots -> frozen -->
  <line x1="580" y1="180" x2="670" y2="180"
        class="arrow-purple"
        marker-end="url(#arrowPurple)"/>

  <text x="625" y="166" text-anchor="middle"
        class="arrow-label">instantiate</text>

  <!-- frozen -> llm -->
  <line x1="890" y1="180" x2="980" y2="180"
        class="arrow-purple"
        marker-end="url(#arrowPurple)"/>

  <text x="935" y="166" text-anchor="middle"
        class="arrow-label">prompt</text>

  <!-- llm -> output -->
  <line x1="1190" y1="180" x2="1260" y2="180"
        class="arrow-teal"
        marker-end="url(#arrowTeal)"/>

  <text x="1225" y="166" text-anchor="middle"
        class="arrow-label">generate</text>

</svg>

<div class="caption">
A frozen prompt construction is instantiated from the repository and
then passed to the LLM, which outputs a plan and executable code.
</div>

</div>

</body>
</html>`,
  },
  "fig8": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>Plan then Code Figure</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
:root{
  --purple:#7c4dff;
  --purple-bg:#f4efff;

  --teal:#009688;
  --teal-bg:#eefcf9;

  --gray:#6b7280;
  --border:#d9dbe3;

  --shadow:0 8px 22px rgba(0,0,0,.06);
}

*{
  box-sizing:border-box;
}

body{
  margin:0;
  padding:36px;
  background:#ffffff;
  font-family:Inter,sans-serif;
  color:#111827;
}

.figure{
  width:100%;
  max-width:1400px;
  margin:auto;
}

.row{
  display:flex;
  gap:24px;
  align-items:stretch;
}

.plan-panel{
  width:42%;
}

.code-panel{
  width:55%;
}

.card{
  border-radius:18px;
  box-shadow:var(--shadow);
  overflow:hidden;
  border:1px solid var(--border);
  height:100%;
}

.plan-card{
  background:var(--purple-bg);
  border-color:rgba(124,77,255,.22);
}

.code-card{
  background:var(--teal-bg);
  border-color:rgba(0,150,136,.22);
}

.card-header{
  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:14px 18px;

  font-size:15px;
  font-weight:700;

  border-bottom:1px solid rgba(0,0,0,.06);
}

.plan-card .card-header{
  color:#5b35d5;
  background:rgba(124,77,255,.05);
}

.code-card .card-header{
  color:#00796b;
  background:rgba(0,150,136,.05);
}

.header-right{
  font-weight:500;
  font-style:italic;
  font-size:12px;
  opacity:.75;
}

.card-body{
  padding:18px 20px 20px;
}

.step{
  margin-bottom:18px;
}

.step:last-child{
  margin-bottom:0;
}

.step-title{
  font-size:13px;
  font-weight:700;
  margin-bottom:6px;
  color:#1f2937;
}

.step-desc{
  font-size:12px;
  line-height:1.6;
  color:#374151;
}

.code-block{
  background:#ffffff;
  border:1px solid rgba(0,0,0,.06);
  border-radius:14px;

  padding:16px 18px;

  font-family:"JetBrains Mono", monospace;
  font-size:12px;
  line-height:1.65;

  overflow:auto;
  white-space:pre;
}

.kw{
  color:#2563eb;
  font-weight:600;
}

.fn{
  color:#7c3aed;
  font-weight:600;
}

.cm{
  color:#6b7280;
  font-style:italic;
}

.str{
  color:#d97706;
}

.caption{
  margin-top:14px;
  text-align:center;
  font-size:14px;
  color:#374151;
}

@media (max-width:1000px){

  .row{
    flex-direction:column;
  }

  .plan-panel,
  .code-panel{
    width:100%;
  }
}
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>

<body>

<div class="figure fig-plan-code">

  <div class="row">

    <!-- LEFT -->
    <div class="plan-panel">

      <div class="card plan-card">

        <div class="card-header">
          <div>① Plan</div>
          <div class="header-right">zero-shot, plan-then-code</div>
        </div>

        <div class="card-body">

          <div class="step">
            <div class="step-title">Step 1 · Feature engineering</div>
            <div class="step-desc">
              Concatenate BERT (768) + spaCy (300) + profile (10) → 1078-dim;
              <code>StandardScaler</code> fit on training nodes only.
            </div>
          </div>

          <div class="step">
            <div class="step-title">Step 2 · Graph construction</div>
            <div class="step-desc">
              Custom <code>Dataset</code> builds per-graph
              <code>Data(x, edge_index, y, root_idx)</code>;
              node indices remapped to local 0..N−1.
            </div>
          </div>

          <div class="step">
            <div class="step-title">Step 3 · Model architecture</div>
            <div class="step-desc">
              Stacked <code>GATConv</code> + <code>global_mean_pool</code>,
              concatenated with a dedicated root-node MLP; sigmoid head.
            </div>
          </div>

          <div class="step">
            <div class="step-title">Step 4 · Training</div>
            <div class="step-desc">
              Adam (η = 10⁻³), <code>BCELoss</code>, batch = 64,
              early stopping on validation accuracy (patience = 5).
            </div>
          </div>

          <div class="step">
            <div class="step-title">Step 5 · Submission</div>
            <div class="step-desc">
              Inference on hidden test split → write
              <code>predictions.csv</code> with columns
              (<code>id</code>, <code>y_pred</code>).
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="code-panel">

      <div class="card code-card">

        <div class="card-header">
          <div>② Code</div>
          <div class="header-right">LLM-generated, abridged</div>
        </div>

        <div class="card-body">

<div class="code-block"><span class="cm"># Step 1: features</span>
x = np.hstack([bert, spacy,
               StandardScaler().fit_transform(profile_train)])  <span class="cm"># 1078-d</span>

<span class="cm"># Step 2-3: model</span>
<span class="kw">class</span> <span class="fn">GossipGNN</span>(nn.Module):
    <span class="kw">def</span> __init__(self, in_ch, hid=128):
        super().__init__()
        self.gat1 = GATConv(in_ch, hid, heads=4)
        self.gat2 = GATConv(hid * 4, hid)
        self.root = nn.Linear(in_ch, hid)
        self.head = nn.Linear(hid * 2, 1)

    <span class="kw">def</span> forward(self, x, edge_index, batch, root_idx):
        h = F.elu(self.gat1(x, edge_index))
        h = self.gat2(h, edge_index)

        g = torch.cat([
            global_mean_pool(h, batch),
            self.root(x[root_idx])
        ], dim=1)

        <span class="kw">return</span> torch.sigmoid(self.head(g))

<span class="cm"># Step 4: training loop with early stopping</span>
opt = Adam(model.parameters(), lr=1e-3)

<span class="kw">for</span> epoch <span class="kw">in</span> range(200):
    train_one_epoch(model, train_loader, opt, BCELoss())

    <span class="kw">if</span> early_stop(evaluate(model, val_loader)):
        <span class="kw">break</span>

<span class="cm"># Step 5: submission</span>
preds = (model(test_batch).sigmoid() &gt; 0.5).long()

pd.DataFrame({
    <span class="str">"id"</span>: test_ids,
    <span class="str">"y_pred"</span>: preds
}).to_csv(<span class="str">"predictions.csv"</span>, index=False)
</div>

        </div>
      </div>
    </div>

  </div>

  <div class="caption">
    Plan-then-code paradigm illustrated for C03 (Real or Fake!):
    a 5-step structured plan (left) and the LLM-generated,
    executable implementation skeleton (right).
  </div>

</div>

</body>
</html>`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>Plan then Code Figure</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
:root{
  --purple:#7c4dff;
  --purple-bg:#f4efff;

  --teal:#009688;
  --teal-bg:#eefcf9;

  --gray:#6b7280;
  --border:#d9dbe3;

  --shadow:0 8px 22px rgba(0,0,0,.06);
}

*{
  box-sizing:border-box;
}

body{
  margin:0;
  padding:36px;
  background:#ffffff;
  font-family:Inter,sans-serif;
  color:#111827;
}

.figure{
  width:100%;
  max-width:1400px;
  margin:auto;
}

.row{
  display:flex;
  gap:24px;
  align-items:stretch;
}

.plan-panel{
  width:42%;
}

.code-panel{
  width:55%;
}

.card{
  border-radius:18px;
  box-shadow:var(--shadow);
  overflow:hidden;
  border:1px solid var(--border);
  height:100%;
}

.plan-card{
  background:var(--purple-bg);
  border-color:rgba(124,77,255,.22);
}

.code-card{
  background:var(--teal-bg);
  border-color:rgba(0,150,136,.22);
}

.card-header{
  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:14px 18px;

  font-size:15px;
  font-weight:700;

  border-bottom:1px solid rgba(0,0,0,.06);
}

.plan-card .card-header{
  color:#5b35d5;
  background:rgba(124,77,255,.05);
}

.code-card .card-header{
  color:#00796b;
  background:rgba(0,150,136,.05);
}

.header-right{
  font-weight:500;
  font-style:italic;
  font-size:12px;
  opacity:.75;
}

.card-body{
  padding:18px 20px 20px;
}

.step{
  margin-bottom:18px;
}

.step:last-child{
  margin-bottom:0;
}

.step-title{
  font-size:13px;
  font-weight:700;
  margin-bottom:6px;
  color:#1f2937;
}

.step-desc{
  font-size:12px;
  line-height:1.6;
  color:#374151;
}

.code-block{
  background:#ffffff;
  border:1px solid rgba(0,0,0,.06);
  border-radius:14px;

  padding:16px 18px;

  font-family:"JetBrains Mono", monospace;
  font-size:12px;
  line-height:1.65;

  overflow:auto;
  white-space:pre;
}

.kw{
  color:#2563eb;
  font-weight:600;
}

.fn{
  color:#7c3aed;
  font-weight:600;
}

.cm{
  color:#6b7280;
  font-style:italic;
}

.str{
  color:#d97706;
}

.caption{
  margin-top:14px;
  text-align:center;
  font-size:14px;
  color:#374151;
}

@media (max-width:1000px){

  .row{
    flex-direction:column;
  }

  .plan-panel,
  .code-panel{
    width:100%;
  }
}
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>

<body>

<div class="figure fig-plan-code">

  <div class="row">

    <!-- LEFT -->
    <div class="plan-panel">

      <div class="card plan-card">

        <div class="card-header">
          <div>① Plan</div>
          <div class="header-right">zero-shot, plan-then-code</div>
        </div>

        <div class="card-body">

          <div class="step">
            <div class="step-title">Step 1 · Feature engineering</div>
            <div class="step-desc">
              Concatenate BERT (768) + spaCy (300) + profile (10) → 1078-dim;
              <code>StandardScaler</code> fit on training nodes only.
            </div>
          </div>

          <div class="step">
            <div class="step-title">Step 2 · Graph construction</div>
            <div class="step-desc">
              Custom <code>Dataset</code> builds per-graph
              <code>Data(x, edge_index, y, root_idx)</code>;
              node indices remapped to local 0..N−1.
            </div>
          </div>

          <div class="step">
            <div class="step-title">Step 3 · Model architecture</div>
            <div class="step-desc">
              Stacked <code>GATConv</code> + <code>global_mean_pool</code>,
              concatenated with a dedicated root-node MLP; sigmoid head.
            </div>
          </div>

          <div class="step">
            <div class="step-title">Step 4 · Training</div>
            <div class="step-desc">
              Adam (η = 10⁻³), <code>BCELoss</code>, batch = 64,
              early stopping on validation accuracy (patience = 5).
            </div>
          </div>

          <div class="step">
            <div class="step-title">Step 5 · Submission</div>
            <div class="step-desc">
              Inference on hidden test split → write
              <code>predictions.csv</code> with columns
              (<code>id</code>, <code>y_pred</code>).
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="code-panel">

      <div class="card code-card">

        <div class="card-header">
          <div>② Code</div>
          <div class="header-right">LLM-generated, abridged</div>
        </div>

        <div class="card-body">

<div class="code-block"><span class="cm"># Step 1: features</span>
x = np.hstack([bert, spacy,
               StandardScaler().fit_transform(profile_train)])  <span class="cm"># 1078-d</span>

<span class="cm"># Step 2-3: model</span>
<span class="kw">class</span> <span class="fn">GossipGNN</span>(nn.Module):
    <span class="kw">def</span> __init__(self, in_ch, hid=128):
        super().__init__()
        self.gat1 = GATConv(in_ch, hid, heads=4)
        self.gat2 = GATConv(hid * 4, hid)
        self.root = nn.Linear(in_ch, hid)
        self.head = nn.Linear(hid * 2, 1)

    <span class="kw">def</span> forward(self, x, edge_index, batch, root_idx):
        h = F.elu(self.gat1(x, edge_index))
        h = self.gat2(h, edge_index)

        g = torch.cat([
            global_mean_pool(h, batch),
            self.root(x[root_idx])
        ], dim=1)

        <span class="kw">return</span> torch.sigmoid(self.head(g))

<span class="cm"># Step 4: training loop with early stopping</span>
opt = Adam(model.parameters(), lr=1e-3)

<span class="kw">for</span> epoch <span class="kw">in</span> range(200):
    train_one_epoch(model, train_loader, opt, BCELoss())

    <span class="kw">if</span> early_stop(evaluate(model, val_loader)):
        <span class="kw">break</span>

<span class="cm"># Step 5: submission</span>
preds = (model(test_batch).sigmoid() &gt; 0.5).long()

pd.DataFrame({
    <span class="str">"id"</span>: test_ids,
    <span class="str">"y_pred"</span>: preds
}).to_csv(<span class="str">"predictions.csv"</span>, index=False)
</div>

        </div>
      </div>
    </div>

  </div>

  <div class="caption">
    Plan-then-code paradigm illustrated for C03 (Real or Fake!):
    a 5-step structured plan (left) and the LLM-generated,
    executable implementation skeleton (right).
  </div>

</div>

</body>
</html>`,
  },
  "lst1": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --border:#d8dce3;
  --bg:#ffffff;
  --codebg:#f8fafc;
  --text:#1f2937;
  --muted:#6b7280;
}

body{
  margin:0;
  padding:32px;
  background:#fff;
  font-family:Inter,sans-serif;
  color:var(--text);
}

.figure{
  max-width:980px;
  margin:auto;
}

.listing{
  border:1px solid var(--border);
  border-radius:8px;
  overflow:hidden;
  background:white;
  box-shadow:0 1px 2px rgba(0,0,0,.04);
}

.listing-header{
  padding:14px 18px;
  border-bottom:1px solid var(--border);
  background:#fbfcfd;
}

.listing-title{
  font-size:14px;
  line-height:1.45;
  font-weight:600;
}

.code{
  padding:18px 22px;
  background:var(--codebg);
  overflow:auto;
}

pre{
  margin:0;
  white-space:pre-wrap;
  word-break:break-word;
  font-size:13px;
  line-height:1.62;
  font-family:"JetBrains Mono", monospace;
  color:#111827;
}

.caption{
  margin-top:12px;
  font-size:13px;
  color:var(--muted);
  line-height:1.5;
}

.keyword{ color:#7c3aed; font-weight:600; }
.tag{ color:#0f766e; font-weight:600; }
.comment{ color:#9ca3af; }
.constraint{ color:#b45309; }

</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>
<body>

<div class="figure fig-listing">

  <div class="listing">

    <div class="listing-header">
      <div class="listing-title">
        Simplified frozen prompt template used across all 18 GNN-CB competitions.
      </div>
    </div>

    <div class="code">
<pre>You are solving a GNN coding competition.

You will receive:
  (1) competition README
  (2) repository tree
  (3) dataset summary
  (4) submission format
  (5) allowed libraries

Produce:

<span class="tag">&lt;plan&gt;</span>
  ...structured reasoning plan...
<span class="tag">&lt;/plan&gt;</span>

<span class="tag">&lt;code&gt;</span>
  ...standalone executable implementation...
<span class="tag">&lt;/code&gt;</span>

Constraints:
  - runnable as <span class="keyword">python solution.py</span>
  - CPU-only execution
  - no external downloads
  - must generate <span class="keyword">predictions.csv</span></pre>
    </div>

  </div>

  <div class="caption">
    Listing: Frozen prompt template used for all benchmark competitions.
  </div>

</div>

</body>
</html>`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --border:#d8dce3;
  --bg:#ffffff;
  --codebg:#f8fafc;
  --text:#1f2937;
  --muted:#6b7280;
}

body{
  margin:0;
  padding:32px;
  background:#fff;
  font-family:Inter,sans-serif;
  color:var(--text);
}

.figure{
  max-width:980px;
  margin:auto;
}

.listing{
  border:1px solid var(--border);
  border-radius:8px;
  overflow:hidden;
  background:white;
  box-shadow:0 1px 2px rgba(0,0,0,.04);
}

.listing-header{
  padding:14px 18px;
  border-bottom:1px solid var(--border);
  background:#fbfcfd;
}

.listing-title{
  font-size:14px;
  line-height:1.45;
  font-weight:600;
}

.code{
  padding:18px 22px;
  background:var(--codebg);
  overflow:auto;
}

pre{
  margin:0;
  white-space:pre-wrap;
  word-break:break-word;
  font-size:13px;
  line-height:1.62;
  font-family:"JetBrains Mono", monospace;
  color:#111827;
}

.caption{
  margin-top:12px;
  font-size:13px;
  color:var(--muted);
  line-height:1.5;
}

.keyword{ color:#7c3aed; font-weight:600; }
.tag{ color:#0f766e; font-weight:600; }
.comment{ color:#9ca3af; }
.constraint{ color:#b45309; }

</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>
<body>

<div class="figure fig-listing">

  <div class="listing">

    <div class="listing-header">
      <div class="listing-title">
        Simplified frozen prompt template used across all 18 GNN-CB competitions.
      </div>
    </div>

    <div class="code">
<pre>You are solving a GNN coding competition.

You will receive:
  (1) competition README
  (2) repository tree
  (3) dataset summary
  (4) submission format
  (5) allowed libraries

Produce:

<span class="tag">&lt;plan&gt;</span>
  ...structured reasoning plan...
<span class="tag">&lt;/plan&gt;</span>

<span class="tag">&lt;code&gt;</span>
  ...standalone executable implementation...
<span class="tag">&lt;/code&gt;</span>

Constraints:
  - runnable as <span class="keyword">python solution.py</span>
  - CPU-only execution
  - no external downloads
  - must generate <span class="keyword">predictions.csv</span></pre>
    </div>

  </div>

  <div class="caption">
    Listing: Frozen prompt template used for all benchmark competitions.
  </div>

</div>

</body>
</html>`,
  },
  "lst2": {
    bright: `<!DOCTYPE html>
<html class="gnncb-bright" lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --blue:#2563eb;
  --teal:#0f766e;
  --red:#dc2626;
  --border:#d8dde6;
  --bg:#ffffff;
  --codebg:#f8fafc;
  --text:#1f2937;
  --muted:#6b7280;
}

body{
  margin:0;
  padding:32px;
  background:#fff;
  font-family:Inter,sans-serif;
  color:var(--text);
}

.figure{
  max-width:980px;
  margin:auto;
}

.listing{
  border:1px solid var(--border);
  border-radius:8px;
  overflow:hidden;
  background:var(--bg);
  box-shadow:0 1px 2px rgba(0,0,0,.04);
}

.listing-header{
  padding:14px 18px;
  border-bottom:1px solid var(--border);
  background:#fbfcfd;
}

.listing-title{
  font-size:14px;
  line-height:1.45;
  font-weight:600;
}

.code{
  background:var(--codebg);
  padding:20px 22px;
  overflow:auto;
}

pre{
  margin:0;
  white-space:pre;
  font-size:13px;
  line-height:1.65;
  font-family:"JetBrains Mono", monospace;
  color:#111827;
}

.kw{
  color:var(--blue);
  font-weight:700;
}

.comment{
  color:var(--teal);
  font-style:italic;
}

.string{
  color:var(--red);
}

.func{
  color:#7c3aed;
  font-weight:600;
}

.caption{
  margin-top:12px;
  font-size:13px;
  line-height:1.5;
  color:var(--muted);
}
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="bright"></script>
</head>
<body>

<div class="figure fig-listing">

  <div class="listing">

    <div class="listing-header">
      <div class="listing-title">
        Simplified non-agent orchestration loop with bounded execute-and-repair iterations (k ≤ 5).
      </div>
    </div>

    <div class="code">
<pre><span class="func">prompt</span> = instantiate_frozen_prompt(repo)

<span class="kw">for</span> attempt <span class="kw">in</span> range(REPAIR_LIMIT):           <span class="comment"># k &lt;= 5</span>

    response = call_llm(prompt)               <span class="comment"># API request</span>

    plan     = extract_plan(response)
    code     = extract_code(response)

    write_solution(code)                      <span class="comment"># -&gt; solution.py</span>

    result   = execute_solution()             <span class="comment"># CPU-only sandbox</span>

    <span class="kw">if</span> valid_submission(result):              <span class="comment"># schema + content</span>
        <span class="kw">break</span>

    prompt += format_traceback(result)        <span class="comment"># appended for repair</span></pre>
    </div>

  </div>

  <div class="caption">
    Listing: Simplified orchestration loop for frozen-prompt inference with iterative repair.
  </div>

</div>

</body>
</html>`,
    dark: `<!DOCTYPE html>
<html class="gnncb-dark" lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --blue:#2563eb;
  --teal:#0f766e;
  --red:#dc2626;
  --border:#d8dde6;
  --bg:#ffffff;
  --codebg:#f8fafc;
  --text:#1f2937;
  --muted:#6b7280;
}

body{
  margin:0;
  padding:32px;
  background:#fff;
  font-family:Inter,sans-serif;
  color:var(--text);
}

.figure{
  max-width:980px;
  margin:auto;
}

.listing{
  border:1px solid var(--border);
  border-radius:8px;
  overflow:hidden;
  background:var(--bg);
  box-shadow:0 1px 2px rgba(0,0,0,.04);
}

.listing-header{
  padding:14px 18px;
  border-bottom:1px solid var(--border);
  background:#fbfcfd;
}

.listing-title{
  font-size:14px;
  line-height:1.45;
  font-weight:600;
}

.code{
  background:var(--codebg);
  padding:20px 22px;
  overflow:auto;
}

pre{
  margin:0;
  white-space:pre;
  font-size:13px;
  line-height:1.65;
  font-family:"JetBrains Mono", monospace;
  color:#111827;
}

.kw{
  color:var(--blue);
  font-weight:700;
}

.comment{
  color:var(--teal);
  font-style:italic;
}

.string{
  color:var(--red);
}

.func{
  color:#7c3aed;
  font-weight:600;
}

.caption{
  margin-top:12px;
  font-size:13px;
  line-height:1.5;
  color:var(--muted);
}
</style>
      <script src="gnncb.js" data-gnncb-embed data-gnncb-theme="dark"></script>
</head>
<body>

<div class="figure fig-listing">

  <div class="listing">

    <div class="listing-header">
      <div class="listing-title">
        Simplified non-agent orchestration loop with bounded execute-and-repair iterations (k ≤ 5).
      </div>
    </div>

    <div class="code">
<pre><span class="func">prompt</span> = instantiate_frozen_prompt(repo)

<span class="kw">for</span> attempt <span class="kw">in</span> range(REPAIR_LIMIT):           <span class="comment"># k &lt;= 5</span>

    response = call_llm(prompt)               <span class="comment"># API request</span>

    plan     = extract_plan(response)
    code     = extract_code(response)

    write_solution(code)                      <span class="comment"># -&gt; solution.py</span>

    result   = execute_solution()             <span class="comment"># CPU-only sandbox</span>

    <span class="kw">if</span> valid_submission(result):              <span class="comment"># schema + content</span>
        <span class="kw">break</span>

    prompt += format_traceback(result)        <span class="comment"># appended for repair</span></pre>
    </div>

  </div>

  <div class="caption">
    Listing: Simplified orchestration loop for frozen-prompt inference with iterative repair.
  </div>

</div>

</body>
</html>`,
  },
};

const GNNCB_EMBED_CSS = {
  bright: `/* ─── embed bright ─── */
/* Bright theme for *-bright.html */
html.gnncb-embed.gnncb-bright,
html.gnncb-embed.gnncb-bright body {
  overflow: visible !important;
}

html.gnncb-bright {
  --embed-bg: #ffffff;
  --embed-surface: #ffffff;
  --embed-surface2: #f6f8fa;
  --embed-border: #d0d7de;
  --embed-ink: #1f2937;
  --embed-muted: #4b5563;
  --embed-code-bg: #f8fafc;
  --embed-code-fg: #111827;
  --border: #d8dce3;
  --bg: #ffffff;
  --codebg: #f8fafc;
  --text: #1f2937;
  --muted: #6b7280;
}

html.gnncb-bright,
html.gnncb-bright body {
  background: var(--embed-bg) !important;
  color: var(--embed-ink) !important;
}

html.gnncb-bright .figure,
html.gnncb-bright .figure-wrap {
  background: var(--embed-surface) !important;
}

html.gnncb-bright .caption,
html.gnncb-bright .fig-desc,
html.gnncb-bright .subtitle {
  color: var(--embed-muted) !important;
}

html.gnncb-bright .panel {
  background: var(--embed-surface) !important;
  border-color: var(--embed-border) !important;
}

html.gnncb-bright .divider {
  border-color: #d8d8d8 !important;
}

/* Figure 1 */
html.gnncb-bright .fig-benchmark-overview {
  background: #ffffff !important;
}

html.gnncb-bright .fig-benchmark-overview .title {
  color: #111827 !important;
}

html.gnncb-bright .fig-benchmark-overview .subtitle,
html.gnncb-bright .fig-benchmark-overview .label {
  color: #6b7280 !important;
}

html.gnncb-bright .fig-benchmark-overview .panel {
  background: #ffffff !important;
  border-color: #cfcfcf !important;
}

html.gnncb-bright .fig-benchmark-overview .infobox,
html.gnncb-bright .fig-benchmark-overview .box {
  background: #f7f7f7 !important;
  border-color: #cfcfcf !important;
  color: #111827 !important;
}

html.gnncb-bright .fig-benchmark-overview .protocol-purple,
html.gnncb-bright .fig-benchmark-overview .pipe1 {
  background: #f2e8ff !important;
  border-color: #9f72ff !important;
  color: #6b2ec7 !important;
}

html.gnncb-bright .fig-benchmark-overview .protocol-teal,
html.gnncb-bright .fig-benchmark-overview .pipe2 {
  background: #e5fffa !important;
  border-color: #2ab9a0 !important;
  color: #00695f !important;
}

html.gnncb-bright .fig-benchmark-overview .protocol-blue {
  background: #eaf1ff !important;
  border-color: #6b8cff !important;
  color: #1e47b8 !important;
}

html.gnncb-bright .fig-benchmark-overview .arrow {
  color: #6b7280 !important;
}

html.gnncb-bright .fig-benchmark-overview .line {
  border-top-color: #d8d8d8 !important;
}

/* Figure 2 */
html.gnncb-bright .fig-llm-pipeline {
  background: #ffffff !important;
}

html.gnncb-bright .fig-llm-pipeline .phase.input,
html.gnncb-bright .fig-llm-pipeline .blue {
  background: #eaf1ff !important;
  border-color: #6b8cff !important;
  color: #1e47b8 !important;
}

html.gnncb-bright .fig-llm-pipeline .phase.gen,
html.gnncb-bright .fig-llm-pipeline .purple {
  background: #f2e8ff !important;
  border-color: #9f72ff !important;
  color: #6b2ec7 !important;
}

html.gnncb-bright .fig-llm-pipeline .phase.exec,
html.gnncb-bright .fig-llm-pipeline .teal {
  background: #e5fffa !important;
  border-color: #2ab9a0 !important;
  color: #00695f !important;
}

html.gnncb-bright .fig-llm-pipeline .phase.score,
html.gnncb-bright .fig-llm-pipeline .orange,
html.gnncb-bright .fig-llm-pipeline .gold {
  background: #fff0e2 !important;
  border-color: #ff9d47 !important;
  color: #b66200 !important;
}

html.gnncb-bright .fig-llm-pipeline .label {
  color: #6b7280 !important;
}

html.gnncb-bright .fig-llm-pipeline #diamond {
  background: #f2e8ff !important;
  border-color: #9f72ff !important;
}

html.gnncb-bright .fig-llm-pipeline #diamond span {
  color: #6b2ec7 !important;
}

/* Figure 3 */
html.gnncb-bright .fig-human-results {
  background: #ffffff !important;
}

html.gnncb-bright .fig-human-results .subtitle,
html.gnncb-bright .fig-human-results .caption b {
  color: #111827 !important;
}

html.gnncb-bright .fig-human-results .panel {
  background: #ffffff !important;
  border-color: #dddddd !important;
}

html.gnncb-bright .fig-human-results .chart-slot--class {
  height: 332px !important;
}

html.gnncb-bright .fig-human-results .chart-slot--sm {
  height: 158px !important;
}

html.gnncb-bright .fig-human-results .chart-slot canvas {
  width: 100% !important;
  height: 100% !important;
}

/* Figure 4 */
html.gnncb-bright .fig-llm-leaderboard {
  background: #ffffff !important;
}

html.gnncb-bright .fig-llm-leaderboard .panel {
  background: #ffffff !important;
  border-color: #d0d7de !important;
}

html.gnncb-bright .fig-llm-leaderboard th {
  background: #f6f8fa !important;
  color: #374151 !important;
  border-bottom-color: #e5e7eb !important;
}

html.gnncb-bright .fig-llm-leaderboard td {
  color: #1f2937 !important;
  border-bottom-color: #e5e7eb !important;
}

html.gnncb-bright .fig-llm-leaderboard .model {
  color: #111827 !important;
}

html.gnncb-bright .fig-llm-leaderboard .sub,
html.gnncb-bright .fig-llm-leaderboard .rank {
  color: #6b7280 !important;
}

html.gnncb-bright .fig-llm-leaderboard .gap {
  color: #1a7f37 !important;
}

html.gnncb-bright .fig-llm-leaderboard .caption b {
  color: #111827 !important;
}

/* Figure 5 */
html.gnncb-bright .fig-gap-analysis {
  background: #ffffff !important;
}

html.gnncb-bright .fig-gap-analysis .panel {
  background: #ffffff !important;
  border-color: #d0d7de !important;
}

html.gnncb-bright .fig-gap-analysis .caption b {
  color: #111827 !important;
}

/* Figure 6 & 7 */
html.gnncb-bright .fig-human-pipeline,
html.gnncb-bright .fig-frozen-prompt {
  background: #ffffff !important;
}

html.gnncb-bright .fig-human-pipeline .caption b,
html.gnncb-bright .fig-human-pipeline .caption i,
html.gnncb-bright .fig-human-pipeline .caption code {
  color: #1f2937 !important;
}

html.gnncb-bright .fig-human-pipeline svg text,
html.gnncb-bright .fig-human-pipeline svg tspan,
html.gnncb-bright .fig-frozen-prompt .tiny,
html.gnncb-bright .fig-frozen-prompt .small,
html.gnncb-bright .fig-frozen-prompt .title {
  fill: #1f2937 !important;
}

html.gnncb-bright .fig-frozen-prompt .arrow-label {
  fill: #6b7280 !important;
}

html.gnncb-bright .fig-frozen-prompt .ibox {
  fill: #edf5ff !important;
  stroke: #5f95d6 !important;
}

html.gnncb-bright .fig-frozen-prompt .gbox {
  fill: #f3efff !important;
  stroke: #7c63c9 !important;
}

html.gnncb-bright .fig-frozen-prompt .tbox {
  fill: #eefbf8 !important;
  stroke: #4fae9b !important;
}

html.gnncb-bright .fig-frozen-prompt .ebox {
  fill: #eef8f0 !important;
  stroke: #56a764 !important;
}

html.gnncb-bright .fig-frozen-prompt .stag,
html.gnncb-bright .fig-frozen-prompt .planTag {
  fill: #f6f1ff !important;
  stroke: #8a73d1 !important;
}

/* Figure 8 */
html.gnncb-bright .fig-plan-code {
  background: #ffffff !important;
}

html.gnncb-bright .fig-plan-code .plan-card {
  background: #f4efff !important;
  border-color: rgba(124, 77, 255, 0.25) !important;
}

html.gnncb-bright .fig-plan-code .code-card {
  background: #eefcf9 !important;
  border-color: rgba(0, 150, 136, 0.25) !important;
}

html.gnncb-bright .fig-plan-code .step-title {
  color: #1f2937 !important;
}

html.gnncb-bright .fig-plan-code .step-desc {
  color: #374151 !important;
}

html.gnncb-bright .fig-plan-code .code-block {
  background: #ffffff !important;
  border-color: rgba(0, 0, 0, 0.08) !important;
  color: #111827 !important;
}

html.gnncb-bright .fig-plan-code .plan-card .card-header {
  color: #5b35d5 !important;
}

html.gnncb-bright .fig-plan-code .code-card .card-header {
  color: #00796b !important;
}

html.gnncb-bright .fig-plan-code .kw {
  color: #2563eb !important;
}

html.gnncb-bright .fig-plan-code .fn {
  color: #7c3aed !important;
}

html.gnncb-bright .fig-plan-code .cm {
  color: #6b7280 !important;
}

html.gnncb-bright .fig-plan-code .str {
  color: #d97706 !important;
}

/* Listings */
html.gnncb-bright.gnncb-listing,
html.gnncb-bright .fig-listing {
  background: #ffffff !important;
}

html.gnncb-bright .fig-listing .listing {
  background: #ffffff !important;
  border-color: #d8dce3 !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04) !important;
}

html.gnncb-bright .fig-listing .listing-header {
  background: #fbfcfd !important;
  border-bottom-color: #d8dce3 !important;
}

html.gnncb-bright .fig-listing .listing-title {
  color: #1f2937 !important;
}

html.gnncb-bright .fig-listing .code {
  background: var(--embed-code-bg) !important;
}

html.gnncb-bright .fig-listing pre {
  color: var(--embed-code-fg) !important;
}

html.gnncb-bright .fig-listing .keyword {
  color: #7c3aed !important;
}

html.gnncb-bright .fig-listing .tag {
  color: #0f766e !important;
}

html.gnncb-bright .fig-listing .constraint {
  color: #b45309 !important;
}

html.gnncb-bright .fig-listing .kw {
  color: #2563eb !important;
}

html.gnncb-bright .fig-listing .func {
  color: #7c3aed !important;
}

html.gnncb-bright .fig-listing .string {
  color: #dc2626 !important;
}

html.gnncb-bright .fig-listing .comment {
  color: #6b7280 !important;
  font-style: italic !important;
}

html.gnncb-bright.gnncb-listing,
html.gnncb-bright.gnncb-listing body {
  overflow: visible !important;
}

html.gnncb-bright .fig-listing .listing,
html.gnncb-bright .fig-listing .code {
  overflow: visible !important;
}

html.gnncb-bright .fig-listing pre {
  white-space: pre-wrap !important;
  word-break: break-word !important;
}`,
  dark: `/* ─── embed dark ─── */
/* Dark theme for *-dark.html */
html.gnncb-dark {
  --embed-fs: 15px;
  --embed-lh: 1.6;
  height: auto !important;
}

html.gnncb-embed.gnncb-dark,
html.gnncb-embed.gnncb-dark body {
  overflow: visible !important;
}

/* Dark embed tokens */
html.gnncb-dark {
  --embed-bg: #0d1117;
  --embed-surface: #161b22;
  --embed-surface2: #21262d;
  --embed-border: #30363d;
  --embed-ink: #e6edf3;
  --embed-muted: #8b949e;
  --embed-code-bg: #0d1117;
  --embed-code-fg: #e6edf3;
  --border: #30363d;
  --bg: #161b22;
  --codebg: #0d1117;
  --text: #e6edf3;
  --muted: #8b949e;
}

html.gnncb-dark,
html.gnncb-dark body {
  background: var(--embed-bg) !important;
  color: var(--embed-ink) !important;
}


html.gnncb-dark body {
  padding: 8px !important;
  margin: 0 !important;
  min-height: 0 !important;
  font-size: var(--embed-fs) !important;
  line-height: var(--embed-lh) !important;
}

/* ─── Unified typography (all figures & listings) ───────────────────── */
html.gnncb-dark .caption,
html.gnncb-dark .fig-desc,
html.gnncb-dark .subtitle,
html.gnncb-dark .listing-title,
html.gnncb-dark .paneltitle,
html.gnncb-dark .label,
html.gnncb-dark pre,
html.gnncb-dark .phase,
html.gnncb-dark .box,
html.gnncb-dark .chip,
html.gnncb-dark .infobox,
html.gnncb-dark .protocol,
html.gnncb-dark .pipe1,
html.gnncb-dark .pipe2,
html.gnncb-dark .small,
html.gnncb-dark .step-title,
html.gnncb-dark .step-desc,
html.gnncb-dark .code-block,
html.gnncb-dark .card-header,
html.gnncb-dark .header-right,
html.gnncb-dark .tiny,
html.gnncb-dark .arrow-label,
html.gnncb-dark #diamond span {
  font-size: var(--embed-fs) !important;
  line-height: var(--embed-lh) !important;
}

html.gnncb-dark .title {
  font-size: var(--embed-fs) !important;
  line-height: var(--embed-lh) !important;
}

html.gnncb-dark .figure,
html.gnncb-dark .figure-wrap {
  background: var(--embed-surface) !important;
}

html.gnncb-dark .caption,
html.gnncb-dark .fig-desc,
html.gnncb-dark .subtitle {
  color: var(--embed-muted) !important;
}

html.gnncb-dark .panel {
  background: var(--embed-surface) !important;
  border-color: var(--embed-border) !important;
}

html.gnncb-dark .divider {
  border-color: #484f58 !important;
}

/* ─── Figure 1 — benchmark overview ───────────────────────────────── */
html.gnncb-dark .fig-benchmark-overview {
  background: #161b22 !important;
}

html.gnncb-dark .fig-benchmark-overview .title {
  color: #e6edf3 !important;
  fill: unset !important;
}

html.gnncb-dark .fig-benchmark-overview .panel {
  background: #161b22 !important;
  border-color: #30363d !important;
}

html.gnncb-dark .fig-benchmark-overview .infobox,
html.gnncb-dark .fig-benchmark-overview .box {
  background: #21262d !important;
  border-color: #30363d !important;
  color: #e6edf3 !important;
}

html.gnncb-dark .fig-benchmark-overview .protocol-purple {
  background: #1e1228 !important;
  border-color: #bc8cff !important;
  color: #d2a8ff !important;
}

html.gnncb-dark .fig-benchmark-overview .protocol-teal {
  background: #0d2b14 !important;
  border-color: #2ea043 !important;
  color: #7ee787 !important;
}

html.gnncb-dark .fig-benchmark-overview .protocol-blue {
  background: #1c2d4a !important;
  border-color: #388bfd !important;
  color: #79c0ff !important;
}

html.gnncb-dark .fig-benchmark-overview .pipe1 {
  background: #1e1228 !important;
  border-color: #bc8cff !important;
  color: #d2a8ff !important;
}

html.gnncb-dark .fig-benchmark-overview .pipe2 {
  background: #0d2b14 !important;
  border-color: #2ea043 !important;
  color: #7ee787 !important;
}

html.gnncb-dark .fig-benchmark-overview .arrow {
  color: #8b949e !important;
}

html.gnncb-dark .fig-benchmark-overview .line {
  border-top-color: #484f58 !important;
}

/* ─── Figure 2 — LLM pipeline ─────────────────────────────────────── */
html.gnncb-dark .fig-llm-pipeline {
  background: #161b22 !important;
  width: 1400px !important;
  height: auto !important;
  min-height: 560px !important;
}

html.gnncb-dark .fig-llm-pipeline .phase.input {
  background: #1c2d4a !important;
  border-color: #388bfd !important;
  color: #79c0ff !important;
}

html.gnncb-dark .fig-llm-pipeline .phase.gen {
  background: #1e1228 !important;
  border-color: #bc8cff !important;
  color: #d2a8ff !important;
}

html.gnncb-dark .fig-llm-pipeline .phase.exec {
  background: #0d2b14 !important;
  border-color: #2ea043 !important;
  color: #7ee787 !important;
}

html.gnncb-dark .fig-llm-pipeline .phase.score {
  background: #3d2d10 !important;
  border-color: #d29922 !important;
  color: #f0c14d !important;
}

html.gnncb-dark .fig-llm-pipeline .blue {
  background: #1c2d4a !important;
  border-color: #388bfd !important;
  color: #79c0ff !important;
}

html.gnncb-dark .fig-llm-pipeline .purple {
  background: #1e1228 !important;
  border-color: #bc8cff !important;
  color: #d2a8ff !important;
}

html.gnncb-dark .fig-llm-pipeline .teal {
  background: #0d2b14 !important;
  border-color: #2ea043 !important;
  color: #7ee787 !important;
}

html.gnncb-dark .fig-llm-pipeline .orange,
html.gnncb-dark .fig-llm-pipeline .gold {
  background: #3d2d10 !important;
  border-color: #d29922 !important;
  color: #f0c14d !important;
}

html.gnncb-dark .fig-llm-pipeline .label {
  color: #8b949e !important;
}

html.gnncb-dark .fig-llm-pipeline #diamond {
  background: #1e1228 !important;
  border-color: #bc8cff !important;
}

html.gnncb-dark .fig-llm-pipeline #diamond span {
  color: #d2a8ff !important;
}

/* ─── Figure 3 — human results ────────────────────────────────────── */
html.gnncb-dark .fig-human-results {
  width: 1400px !important;
  background: #161b22 !important;
  box-sizing: border-box;
}

html.gnncb-dark .fig-human-results .subtitle {
  color: #e6edf3 !important;
}

html.gnncb-dark .fig-human-results .caption b {
  color: #e6edf3 !important;
}

html.gnncb-dark .fig-human-results .panel {
  background: #161b22 !important;
  border-color: #30363d !important;
  padding: 12px !important;
}

html.gnncb-dark .fig-human-results .chart-slot--class {
  height: 332px !important;
}

html.gnncb-dark .fig-human-results .chart-slot--sm {
  height: 158px !important;
}

html.gnncb-dark .fig-human-results .chart-slot canvas {
  width: 100% !important;
  height: 100% !important;
}

/* ─── Figure 4 — LLM leaderboard table ─────────────────────────────── */
html.gnncb-dark .fig-llm-leaderboard {
  width: 1400px !important;
  background: #161b22 !important;
}

html.gnncb-dark .fig-llm-leaderboard .panel {
  background: #161b22 !important;
  border-color: #30363d !important;
}

html.gnncb-dark .fig-llm-leaderboard th {
  background: #21262d !important;
  color: #e6edf3 !important;
  border-bottom-color: #30363d !important;
}

html.gnncb-dark .fig-llm-leaderboard td {
  border-bottom-color: #30363d !important;
  color: #e6edf3 !important;
}

html.gnncb-dark .fig-llm-leaderboard .model {
  color: #e6edf3 !important;
}

html.gnncb-dark .fig-llm-leaderboard .sub,
html.gnncb-dark .fig-llm-leaderboard .rank {
  color: #8b949e !important;
}

html.gnncb-dark .fig-llm-leaderboard .gap {
  color: #7ee787 !important;
}

html.gnncb-dark .fig-llm-leaderboard .caption {
  color: #8b949e !important;
}

html.gnncb-dark .fig-llm-leaderboard .caption b {
  color: #e6edf3 !important;
}

/* ─── Figure 5 — gap analysis chart ─────────────────────────────────── */
html.gnncb-dark .fig-gap-analysis {
  width: 1400px !important;
  background: #161b22 !important;
}

html.gnncb-dark .fig-gap-analysis .panel {
  background: #161b22 !important;
  border-color: #30363d !important;
}

html.gnncb-dark .fig-gap-analysis .caption {
  color: #8b949e !important;
}

html.gnncb-dark .fig-gap-analysis .caption b {
  color: #e6edf3 !important;
}

/* ─── Figure 6 — human pipeline (dark text on light SVG boxes) ──────── */
html.gnncb-dark .fig-human-pipeline {
  width: 1500px !important;
  background: #161b22 !important;
}

html.gnncb-dark .fig-human-pipeline .caption b,
html.gnncb-dark .fig-human-pipeline .caption i,
html.gnncb-dark .fig-human-pipeline .caption code {
  color: #e6edf3 !important;
}

/* SVG boxes stay light in both themes — keep dark text for readability */
html.gnncb-dark .fig-human-pipeline svg text,
html.gnncb-dark .fig-human-pipeline svg tspan {
  fill: #1f2937 !important;
  font-size: var(--embed-fs) !important;
}

/* ─── Figure 7 — frozen prompt ────────────────────────────────────── */
html.gnncb-dark .fig-frozen-prompt {
  width: 1400px !important;
  margin: 12px auto !important;
  background: #161b22 !important;
}

html.gnncb-dark .fig-frozen-prompt .tiny,
html.gnncb-dark .fig-frozen-prompt .small,
html.gnncb-dark .fig-frozen-prompt .title {
  fill: #1f2937 !important;
}

html.gnncb-dark .fig-frozen-prompt .arrow-label {
  fill: #6b7280 !important;
}

html.gnncb-dark .fig-frozen-prompt .caption {
  width: 100% !important;
  max-width: 1200px !important;
}

html.gnncb-dark .fig-frozen-prompt .ibox {
  fill: #edf5ff !important;
  stroke: #388bfd !important;
}

html.gnncb-dark .fig-frozen-prompt .gbox {
  fill: #f3efff !important;
  stroke: #bc8cff !important;
}

html.gnncb-dark .fig-frozen-prompt .tbox {
  fill: #eefbf8 !important;
  stroke: #2ea043 !important;
}

html.gnncb-dark .fig-frozen-prompt .ebox {
  fill: #eef8f0 !important;
  stroke: #d29922 !important;
}

html.gnncb-dark .fig-frozen-prompt .stag,
html.gnncb-dark .fig-frozen-prompt .planTag {
  fill: #ffffff !important;
  stroke: #8b949e !important;
}

/* ─── Figure 8 — plan-then-code (dark text on light code panel) ───── */
html.gnncb-dark .fig-plan-code {
  width: 1400px !important;
  max-width: 1400px !important;
  background: #161b22 !important;
}

html.gnncb-dark .fig-plan-code .plan-card {
  background: #f4efff !important;
  border-color: rgba(124, 77, 255, 0.35) !important;
}

html.gnncb-dark .fig-plan-code .code-card {
  background: #eefcf9 !important;
  border-color: rgba(0, 150, 136, 0.35) !important;
}

html.gnncb-dark .fig-plan-code .plan-card .card-header {
  color: #5b35d5 !important;
  background: rgba(124, 77, 255, 0.08) !important;
  border-bottom-color: rgba(124, 77, 255, 0.2) !important;
}

html.gnncb-dark .fig-plan-code .code-card .card-header {
  color: #00796b !important;
  background: rgba(0, 150, 136, 0.08) !important;
  border-bottom-color: rgba(0, 150, 136, 0.2) !important;
}

html.gnncb-dark .fig-plan-code .plan-panel .step-title {
  color: #1f2937 !important;
}

html.gnncb-dark .fig-plan-code .plan-panel .step-desc {
  color: #374151 !important;
}

/* Code panel only — same light styling as bright mode */
html.gnncb-dark .fig-plan-code .code-panel .code-card {
  background: #eefcf9 !important;
  border-color: rgba(0, 150, 136, 0.25) !important;
}

html.gnncb-dark .fig-plan-code .code-panel .code-block {
  background: #ffffff !important;
  border-color: rgba(0, 0, 0, 0.08) !important;
  color: #111827 !important;
}

html.gnncb-dark .fig-plan-code .code-panel .kw {
  color: #2563eb !important;
}

html.gnncb-dark .fig-plan-code .code-panel .fn {
  color: #7c3aed !important;
}

html.gnncb-dark .fig-plan-code .code-panel .cm {
  color: #6b7280 !important;
}

html.gnncb-dark .fig-plan-code .code-panel .str {
  color: #d97706 !important;
}

html.gnncb-dark .fig-plan-code .caption {
  color: #8b949e !important;
}

/* ─── Listings 1 & 2 ──────────────────────────────────────────────── */
html.gnncb-dark .fig-listing {
  width: 980px !important;
  max-width: 980px !important;
  margin: 0 auto !important;
  background: var(--embed-bg) !important;
}

html.gnncb-dark .fig-listing .listing {
  background: var(--embed-surface) !important;
  border-color: #30363d !important;
  border-radius: 10px !important;
  box-shadow: none !important;
}

html.gnncb-dark .fig-listing .listing-header {
  padding: 18px 22px !important;
  background: var(--embed-surface2) !important;
  border-bottom-color: var(--embed-border) !important;
}

html.gnncb-dark .fig-listing .listing-title {
  font-weight: 600 !important;
  color: var(--embed-ink) !important;
}

html.gnncb-dark .fig-listing .caption {
  color: var(--embed-muted) !important;
}

html.gnncb-dark .fig-listing .code {
  padding: 22px 26px !important;
  background: var(--embed-code-bg) !important;
}

html.gnncb-dark .fig-listing pre {
  color: var(--embed-code-fg) !important;
}

html.gnncb-dark .fig-listing .listing,
html.gnncb-dark .fig-listing .code {
  overflow: visible !important;
}

html.gnncb-dark .fig-listing pre {
  white-space: pre-wrap !important;
  word-break: break-word !important;
}

html.gnncb-dark .fig-listing .keyword {
  color: #bc8cff !important;
}

html.gnncb-dark .fig-listing .tag {
  color: #7ee787 !important;
}

html.gnncb-dark .fig-listing .constraint {
  color: #f0c14d !important;
}

html.gnncb-dark .fig-listing .kw {
  color: #79c0ff !important;
}

html.gnncb-dark .fig-listing .func {
  color: #bc8cff !important;
}

html.gnncb-dark .fig-listing .string {
  color: #ff7b72 !important;
}

html.gnncb-dark .fig-listing .comment {
  color: #8b949e !important;
}`,
};

/**
 * Per-version embed setup — each *-bright.html / *-dark.html loads ONE theme stylesheet.
 * data-gnncb-theme="bright" | "dark"
 */
(function () {
  if (!document.currentScript || !document.currentScript.hasAttribute('data-gnncb-embed')) return;
  const script = document.currentScript;
  const theme = script && script.getAttribute('data-gnncb-theme') === 'dark' ? 'dark' : 'bright';
  const isDark = theme === 'dark';
  const root = document.documentElement;

  root.classList.add(isDark ? 'gnncb-dark' : 'gnncb-bright');
  if (window.parent !== window) root.classList.add('gnncb-embed');

  const bg = isDark ? '#0d1117' : '#ffffff';
  const fg = isDark ? '#e6edf3' : '#1f2937';
  root.style.setProperty('background', bg, 'important');
  root.style.setProperty('color', fg, 'important');

  function paintBody() {
    if (!document.body) return;
    document.body.style.setProperty('background', bg, 'important');
    document.body.style.setProperty('color', fg, 'important');
    document.body.style.setProperty('overflow', 'visible', 'important');
    root.style.setProperty('overflow', 'visible', 'important');
    if (window.parent !== window) document.body.style.margin = '0';
  }
  paintBody();
  if (!document.body) document.addEventListener('DOMContentLoaded', paintBody);

  if (document.querySelector('.fig-listing')) {
    root.classList.add('gnncb-listing');
  }

  function notifyParentRefit() {
    if (window.parent === window || !window.parent.GNNCB) return;
    try {
      const vp = window.frameElement && window.frameElement.closest('.figure-viewport');
      window.parent.GNNCB.fitAllFigureViewports();
      if (vp) window.parent.GNNCB.scheduleViewportRefits(vp);
    } catch (_) {}
  }

  if (!document.getElementById('gnncb-embed-theme-css')) {
    const style = document.createElement('style');
    style.id = 'gnncb-embed-theme-css';
    style.textContent = GNNCB_EMBED_CSS[theme] || GNNCB_EMBED_CSS.bright;
    document.head.appendChild(style);
    paintBody();
    notifyParentRefit();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', notifyParentRefit);
  } else {
    setTimeout(notifyParentRefit, 0);
  }
})();



const GNNCB_BLOB_URLS = new Map();

function figureKeyFromDataset(val) {
  if (!val) return '';
  return val.replace(/\.html$/i, '').replace(/-bright$/i, '').replace(/-dark$/i, '');
}

function createFigureBlobUrl(id, variant) {
  const mapKey = id + ':' + variant;
  const entry = GNNCB_FIGURE_HTML[id];
  if (!entry || !entry[variant]) return '';
  if (GNNCB_BLOB_URLS.has(mapKey)) return GNNCB_BLOB_URLS.get(mapKey);
  const blob = new Blob([entry[variant]], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  GNNCB_BLOB_URLS.set(mapKey, url);
  return url;
}

function openFigurePage(id, theme) {
  const variant = theme === 'light' ? 'bright' : 'dark';
  const url = createFigureBlobUrl(id, variant);
  if (url) window.open(url, '_blank', 'noopener');
}

/**
 * GNN-CB site theme (bright / dark) + embedded figure fitting
 */
(function () {
  if (!document.getElementById('theme-toggle') && !document.querySelector('.figure-viewport')) return;
  const THEME_KEY = 'gnncb-theme';

  function getTheme() {
    return document.documentElement.getAttribute('data-theme')
      || localStorage.getItem(THEME_KEY)
      || 'dark';
  }

  function figureKey(iframe, theme) {
    const raw = theme === 'light' ? iframe.dataset.srcBright : iframe.dataset.srcDark;
    return figureKeyFromDataset(raw);
  }

  function figureSrcForTheme(iframe, theme) {
    const key = figureKey(iframe, theme);
    if (!key) return iframe.getAttribute('src') || '';
    return createFigureBlobUrl(key, theme === 'light' ? 'bright' : 'dark');
  }

  function figureKeyFromDataset(val) {
    if (!val) return '';
    return val.replace(/\.html$/i, '').replace(/-bright$/i, '').replace(/-dark$/i, '');
  }

  function syncIframeChrome(iframe, theme) {
    const bg = theme === 'light' ? '#ffffff' : '#0d1117';
    iframe.style.background = bg;
  }

  function applyFigureSources(theme) {
    document.querySelectorAll('.figure-viewport iframe').forEach((iframe) => {
      const target = figureSrcForTheme(iframe, theme);
      if (!target) return;
      const variant = theme === 'light' ? 'bright' : 'dark';
      syncIframeChrome(iframe, theme);
      if (iframe.dataset.gnncbVariant !== variant || iframe.getAttribute('src') !== target) {
        iframe.dataset.gnncbVariant = variant;
        iframe.src = target;
        iframe.addEventListener('load', () => {
          syncIframeChrome(iframe, theme);
          const vp = iframe.closest('.figure-viewport');
          if (vp) scheduleViewportRefits(vp);
        }, { once: true });
      }
    });

  }

  function measureIframeContent(iframe, fallbackW, fallbackH) {
    let w = fallbackW;
    let h = fallbackH;
    try {
      const doc = iframe.contentDocument;
      if (!doc?.body) return { w, h };

      const html = doc.documentElement;
      const body = doc.body;

      iframe.style.width = Math.max(fallbackW, 2400) + 'px';
      iframe.style.height = Math.max(fallbackH, 2400) + 'px';

      html.style.overflow = 'visible';
      html.style.height = 'auto';
      body.style.overflow = 'visible';
      body.style.height = 'auto';

      const root = doc.querySelector('.figure, .figure-wrap');
      const measureRoot = root || body;

      let maxRight = 0;
      let maxBottom = 0;
      let minLeft = Infinity;
      let minTop = Infinity;

      const nodes = measureRoot.querySelectorAll(
        '.figure, .figure-wrap, .caption, svg, canvas, pre, .listing, .code-block, .row, .panel, .card'
      );
      const scan = nodes.length ? nodes : measureRoot.querySelectorAll('*');

      scan.forEach((el) => {
        if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return;
        const r = el.getBoundingClientRect();
        if (r.width < 0.5 && r.height < 0.5) return;
        minLeft = Math.min(minLeft, r.left);
        minTop = Math.min(minTop, r.top);
        maxRight = Math.max(maxRight, r.right);
        maxBottom = Math.max(maxBottom, r.bottom);
      });

      const bodyRect = body.getBoundingClientRect();
      const originLeft = Number.isFinite(minLeft) ? minLeft : bodyRect.left;
      const originTop = Number.isFinite(minTop) ? minTop : bodyRect.top;

      if (maxRight > 0 && maxBottom > 0) {
        w = Math.ceil(maxRight - originLeft + 24);
        h = Math.ceil(maxBottom - originTop + 24);
      }

      w = Math.ceil(Math.max(
        w, measureRoot.scrollWidth, measureRoot.offsetWidth,
        body.scrollWidth, html.scrollWidth, fallbackW
      ));
      h = Math.ceil(Math.max(
        h, measureRoot.scrollHeight, measureRoot.offsetHeight,
        body.scrollHeight, html.scrollHeight, fallbackH
      ));

      h += iframe.closest('[data-listing]') ? 40 : 28;
    } catch (_) { /* cross-origin */ }
    return { w: Math.max(w, 1), h: Math.max(h, 1) };
  }

  function fitFigureViewport(vp) {
    const inner = vp.querySelector('.figure-scale-inner');
    const iframe = inner?.querySelector('iframe');
    if (!inner || !iframe) return;

    const fallbackW = parseInt(vp.dataset.width, 10) || 1400;
    const fallbackH = parseInt(vp.dataset.height, 10) || 800;
    const { w: natW, h: natH } = measureIframeContent(iframe, fallbackW, fallbackH);

    const cw = vp.getBoundingClientRect().width;
    if (cw < 1) return;

    const scale = cw / natW;
    const scaledH = natH * scale;

    inner.style.transform = 'none';
    inner.style.width = Math.ceil(cw) + 'px';
    inner.style.height = Math.ceil(scaledH) + 'px';
    inner.style.left = '0';
    inner.style.top = '0';
    inner.style.overflow = 'hidden';

    iframe.style.width = natW + 'px';
    iframe.style.height = natH + 'px';
    iframe.style.transform = `scale(${scale})`;
    iframe.style.transformOrigin = 'top left';
    iframe.style.display = 'block';
    iframe.style.border = 'none';
    iframe.setAttribute('scrolling', 'no');

    vp.style.width = '100%';
    vp.style.height = Math.ceil(scaledH) + 'px';
    vp.style.overflow = 'hidden';

    syncIframeChrome(iframe, getTheme());
  }

  function fitAllFigureViewports() {
    document.querySelectorAll('.figure-viewport').forEach(fitFigureViewport);
  }

  const refitTimers = new WeakMap();

  function scheduleViewportRefits(vp) {
    const existing = refitTimers.get(vp);
    if (existing) existing.forEach(clearTimeout);

    const delays = vp.dataset.chart === '1'
      ? [0, 100, 250, 500, 1000, 2000, 3500, 5000]
      : vp.dataset.listing === '1'
        ? [0, 100, 250, 600, 1200, 2000]
        : [0, 100, 250, 600, 1500];

    refitTimers.set(vp, delays.map((ms) => setTimeout(() => fitFigureViewport(vp), ms)));
  }

  function initEmbeddedFigures() {
    applyFigureSources(getTheme());
    document.querySelectorAll('.figure-viewport').forEach((vp) => {
      const iframe = vp.querySelector('iframe');
      if (!iframe) return;
      const onReady = () => {
        fitFigureViewport(vp);
        scheduleViewportRefits(vp);
      };
      if (iframe.contentDocument?.readyState === 'complete') onReady();
      else iframe.addEventListener('load', onReady, { once: true });
    });
    fitAllFigureViewports();
  }

  function setTheme(theme) {
    const next = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
      btn.title = next === 'dark' ? 'Switch to bright mode' : 'Switch to dark mode';
    }
    applyFigureSources(next);
    setTimeout(() => {
      document.querySelectorAll('.figure-viewport').forEach(scheduleViewportRefits);
    }, 50);
  }

  function initThemeToggle() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        setTheme(getTheme() === 'dark' ? 'light' : 'dark');
      });
      btn.setAttribute('aria-pressed', getTheme() === 'dark' ? 'true' : 'false');
    }
  }

  window.GNNCB = {
    createFigureBlobUrl,
    openFigurePage,
    figureKeyFromDataset,
    getTheme,
    setTheme,
    fitAllFigureViewports,
    initEmbeddedFigures,
    applyFigureSources,
    scheduleViewportRefits
  };

  initThemeToggle();
  initEmbeddedFigures();
  window.addEventListener('resize', fitAllFigureViewports);
  window.addEventListener('load', () => {
    initEmbeddedFigures();
    setTimeout(fitAllFigureViewports, 100);
  });

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a.fig-open[data-figure-key]');
    if (!a) return;
    e.preventDefault();
    const theme = getTheme();
    openFigurePage(a.dataset.figureKey, theme);
  });

  if (typeof ResizeObserver !== 'undefined') {
    const figObserver = new ResizeObserver(() => fitAllFigureViewports());
    document.querySelectorAll('.figure-viewport').forEach((vp) => figObserver.observe(vp));
  }
})();

(function () {
  if (!document.getElementById("task-grid") && !document.getElementById("reflections-grid")) return;
/* ──────────── Competition data ─────────────────────────────────────── */
// const COMPETITIONS = [
//   { id:"C01", name:"PROVEN-GNN",     diff:"Med",    cat:"Hetero",  task:"Graph", domain:"Cybersecurity", metric:"Macro-F1", dataset:"DiverseVul",     n:17, avg:0.792, std:0.101, high:0.900, low:0.435,
//     desc:"Graph classification for vulnerability detection.",
//     repo:"#",  lb:"" },
//   { id:"C02", name:"CGCC",           diff:"Hard",   cat:"Homo",    task:"Graph", domain:"Urban",         metric:"Macro-F1", dataset:"OpenStreetMap",  n:17, avg:0.383, std:0.086, high:0.537, low:0.205,
//     desc:"Graph classification of city street-network layouts.",
//     repo:"",   lb:"" },
//   { id:"C03", name:"Real Or Fake!",  diff:"Easy",   cat:"Hier",    task:"Graph", domain:"Social",        metric:"Binary F1",dataset:"GossipCop",      n:15, avg:0.945, std:0.053, high:0.980, low:0.767,
//     desc:"Binary graph classification for Twitter fake news.",
//     repo:"https://github.com/TugaAhmed/Real_Or_Fake/tree/main", lb:"https://tugaahmed.github.io/Real_Or_Fake/leaderboard.html" },
//   { id:"C04", name:"GLIMPS-GNN",     diff:"Hard",   cat:"Gen",     task:"Node", domain:"Biomedical",    metric:"Macro-F1",       dataset:"GEO: GSE192902", n:16, avg:0.389, std:0.094, high:0.600, low:0.280,
//     desc:"placenta preeclampsia classification under cross-domain distribution shift.",
//     repo:"https://github.com/Mubarraqqq/gnn-challenge", lb:"https://mubarraqqq.github.io/gnn-challenge/leaderboard.html" },
//   { id:"C05", name:"GNN_BACE",       diff:"Med",    cat:"Mol",     task:"Graph", domain:"Medical",       metric:"Macro-F1", dataset:"BACE",           n:14, avg:0.496, std:0.088, high:0.674, low:0.391,
//     desc:"Molecular graph classification for BACE-1 inhibition prediction.",
//     repo:"https://github.com/hadilaff/GNN_BACE_Challenge", lb:"https://hadilaff.github.io/GNN_BACE_Challenge/leaderboard.html" },
//   { id:"C06", name:"DiaGraph",       diff:"Hard",   cat:"Homo",    task:"Node", domain:"Medical",       metric:"Macro-F1", dataset:"Kaggle Diabetes",n:15, avg:0.570, std:0.125, high:0.822, low:0.477,
//     desc:"Node classification for diabetes prediction on graphs.",
//     repo:"https://github.com/mahatrabelsi1/GNN-MVP-Node-Classification-Under-Noise", lb:"https://mahatrabelsi1.github.io/GNN-MVP-Node-Classification-Under-Noise/leaderboard.html" },
//   { id:"C07", name:"GRAPE",          diff:"Med",    cat:"Spatial", task:"Graph", domain:"Medical",       metric:"Macro-F1", dataset:"DRIVE/STARE/HRF",n:16, avg:0.707, std:0.131, high:0.830, low:0.400,
//     desc:"Diabetic retinopathy detection from retinal vessel graphs.",
//     repo:"https://github.com/Muhammad0isah/GRAPE", lb:"https://muhammad0isah.github.io/GRAPE/leaderboard.html" },
//   { id:"C08", name:"Liar Nodes",     diff:"Easy",   cat:"Homo",    task:"Node", domain:"Biomedical",    metric:"Accuracy", dataset:"CancerSCEM",     n:17, avg:0.756, std:0.212, high:0.996, low:0.407,
//     desc:"Transductive node classification for cancer-cell identification.",
//     repo:"https://github.com/NoorMajdoub/Challenge", lb:"https://github.com/NoorMajdoub/Challenge" },
//   { id:"C09", name:"GraphFMD",       diff:"Med",    cat:"Temp",    task:"Node", domain:"Finance",       metric:"Macro-F1", dataset:"Elliptic",       n:18, avg:0.706, std:0.271, high:0.891, low:0.403,
//     desc:"Temporal inductive node classification on Bitcoin transaction graphs.",
//     repo:"https://github.com/faranbutt/GraphFMD", lb:"https://faranbutt.github.io/GraphFMD/" },
//   { id:"C10", name:"NetLinkArena",   diff:"Med",    cat:"Homo",    task:"Link", domain:"Academic",      metric:"AUC-ROC",  dataset:"CiteSeer",       n:17, avg:0.706, std:0.271, high:0.891, low:0.508,
//     desc:"Link prediction on a perturbed scientific citation graph.",
//     repo:"https://github.com/ignatiusbalayo/NetLinkArena", lb:"https://ignatiusbalayo.github.io/NetLinkArena/leaderboard.html" },
//   { id:"C11", name:"PARK-GNN",       diff:"Hard",   cat:"Homo",    task:"Node", domain:"Medical",       metric:"Macro-F1", dataset:"UCI Parkinson's",n:14, avg:0.773, std:0.116, high:0.933, low:0.548,
//     desc:"Node classification for Parkinson's detection from voice recordings.",
//     repo:"https://github.com/AiIkram/gnn-parkinsons-challenge", lb:"https://aiikram.github.io/gnn-parkinsons-challenge/leaderboard.html" },
//   { id:"C12", name:"GNN-CoRA",       diff:"Med",    cat:"Homo",    task:"Node", domain:"Academic",      metric:"Accuracy", dataset:"Cora",           n:14, avg:0.551, std:0.196, high:0.742, low:0.153,
//     desc:"Node classification on a noisy citation network.",
//     repo:"https://github.com/tasneem-mselim/GNN_CoRA", lb:"https://tasneem-mselim.github.io/GNN_CoRA/final_leaderboard.html" },
//   { id:"C13", name:"GTA",            diff:"Hard",   cat:"Gen",     task:"Graph", domain:"Bioinformatics",metric:"Macro-F1", dataset:"MUTAG",          n:16, avg:0.582, std:0.163, high:0.790, low:0.250,
//     desc:"Binary graph classification of molecular mutagenicity.",
//     repo:"https://github.com/idrees11/GTA-Graph-Topology-Ablation", lb:"https://idrees11.github.io/GTA-Graph-Topology-Ablation/index.html" },
//   { id:"C14", name:"BrainAge",       diff:"Easy",   cat:"Homo",    task:"Regression", domain:"Neuroimaging", metric:"MAE", dataset:"OASIS-3",       n:14, avg:6.531, std:1.474, high:10.638, low:4.984,
//     desc:"Graph regression for chronological age prediction.",
//     repo:"https://github.com/bjayadikary/brain-age-gnn-oasis3", lb:"https://bjayadikary.github.io/brain-age-gnn-oasis3/leaderboard.html" },
//   { id:"C15", name:"OctoNode Cup",   diff:"Med",    cat:"Homo",    task:"Node", domain:"Social",        metric:"Macro-F1", dataset:"GitHub Social",  n:15, avg:0.672, std:0.151, high:0.793, low:0.211,
//     desc:"Binary node classification of GitHub users.",
//     repo:"https://github.com/El-Ikram/OctoNode_Cup", lb:"https://el-ikram.github.io/OctoNode_Cup/leaderboard.html" },
//   { id:"C16", name:"Graph4ASD",      diff:"Med",    cat:"Homo",    task:"Graph", domain:"Neuroimaging", metric:"Macro-F1", dataset:"ABIDE",          n:14, avg:0.513, std:0.082, high:0.627, low:0.389,
//     desc:"Binary classification of brain connectivity graphs (ASD).",
//     repo:"https://github.com/RosePY/Graph4ASD-Challenge", lb:"https://rosepy.github.io/Graph4ASD-Challenge/docs/leaderboard.html" },
//   { id:"C17", name:"Mix2Print",      diff:"Hard",   cat:"Homo",    task:"Regression", domain:"Bioprinting", metric:"NMAE", dataset:"CECT",          n:13, avg:0.08, std:0.02, high:0.147, low:0.069,
//     desc:"Graph regression for 3D bioprinting parameter prediction.",
//     repo:"https://github.com/VinitSingroha/Mix2Print", lb:"https://vinitsingroha.github.io/Mix2Print/leaderboard.html" },
//   { id:"C18", name:"THInC",          diff:"Hard",   cat:"Spatial", task:"Node", domain:"Biomedical",    metric:"Macro-F1", dataset:"NuCLS",          n:14, avg:0.490, std:0.056, high:0.565, low:0.354,
//     desc:"Inductive cell-type classification on histopathology spatial graphs.",
//     repo:"https://github.com/emmakowu3579-ui/inductive-class-challenge", lb:"https://emmakowu3579-ui.github.io/inductive-class-challenge/" },
// ];

const COMPETITIONS = [
  { id:"C01", name:"PROVEN-GNN",     diff:"Med",    cat:"Hetero",  task:"Graph", domain:"Cybersecurity", metric:"Macro-F1", dataset:"DiverseVul",     n:17, avg:0.792, std:0.101, high:0.900, low:0.435,
    desc:"Graph classification on code-property graphs (AST/CFG/PDG) for vulnerability detection.",
    repo:"https://github.com/abdksm/PROVEN-GNN/",  lb:"https://abdksm.github.io/PROVEN-GNN/docs/leaderboard.html" },
  { id:"C02", name:"CGCC",           diff:"Hard",   cat:"Homo",    task:"Graph", domain:"Urban",         metric:"Macro-F1", dataset:"OpenStreetMap",  n:17, avg:0.383, std:0.086, high:0.537, low:0.205,
    desc:"Graph classification of city street-network layouts (organic / grid / hybrid).",
    repo:"https://github.com/Murad-Hossen/CGCC",   lb:"https://murad-hossen.github.io/CGCC/leaderboard/index.html" },
  { id:"C03", name:"Real Or Fake!",  diff:"Easy",   cat:"Hier",    task:"Graph", domain:"Social",        metric:"Binary F1",dataset:"GossipCop",      n:15, avg:0.945, std:0.053, high:0.980, low:0.767,
    desc:"Binary graph classification for fake news detection from Twitter propagation graphs.",
    repo:"https://github.com/TugaAhmed/Real_Or_Fake/tree/main", lb:"https://tugaahmed.github.io/Real_Or_Fake/leaderboard.html" },
  { id:"C04", name:"GLIMPS-GNN",     diff:"Hard",   cat:"Gen",     task:"Node", domain:"Biomedical",    metric:"Macro-F1",       dataset:"GEO: GSE192902", n:16, avg:0.389, std:0.094, high:0.600, low:0.280,
    desc:"Inductive cfRNA → placenta preeclampsia classification under cross-domain distribution shift.",
    repo:"https://github.com/Mubarraqqq/gnn-challenge", lb:"https://mubarraqqq.github.io/gnn-challenge/leaderboard.html" },
  { id:"C05", name:"GNN_BACE",       diff:"Med",    cat:"Mol",     task:"Graph", domain:"Medical",       metric:"Macro-F1", dataset:"BACE",           n:14, avg:0.496, std:0.088, high:0.674, low:0.391,
    desc:"Molecular graph classification for BACE-1 inhibition prediction — pure representation learning, no molecular descriptors.",
    repo:"https://github.com/hadilaff/GNN_BACE_Challenge", lb:"https://hadilaff.github.io/GNN_BACE_Challenge/leaderboard.html" },
  { id:"C06", name:"DiaGraph",       diff:"Hard",   cat:"Homo",    task:"Node", domain:"Medical",       metric:"Macro-F1", dataset:"Kaggle Diabetes",n:15, avg:0.570, std:0.125, high:0.822, low:0.477,
    desc:"Robust node classification for diabetes prediction on noisy, imbalanced patient similarity graphs.",
    repo:"https://github.com/mahatrabelsi1/GNN-MVP-Node-Classification-Under-Noise", lb:"https://mahatrabelsi1.github.io/GNN-MVP-Node-Classification-Under-Noise/leaderboard.html" },
  { id:"C07", name:"GRAPE",          diff:"Med",    cat:"Spatial", task:"Graph", domain:"Medical",       metric:"Macro-F1", dataset:"DRIVE/STARE/HRF",n:16, avg:0.707, std:0.131, high:0.830, low:0.400,
    desc:"Diabetic retinopathy detection from retinal vessel graphs; models must recover vascular topology without handcrafted descriptors.",
    repo:"https://github.com/Muhammad0isah/GRAPE", lb:"https://muhammad0isah.github.io/GRAPE/leaderboard.html" },
  { id:"C08", name:"Liar Nodes",     diff:"Easy",   cat:"Homo",    task:"Node", domain:"Biomedical",    metric:"Accuracy", dataset:"CancerSCEM",     n:17, avg:0.756, std:0.212, high:0.996, low:0.407,
    desc:"Transductive node classification for cancer-cell identification; node embeddings are intentionally corrupted to simulate biological ambiguity.",
    repo:"https://github.com/NoorMajdoub/Challenge", lb:"https://github.com/NoorMajdoub/Challenge" },
  { id:"C09", name:"GraphFMD",       diff:"Med",    cat:"Temp",    task:"Node", domain:"Finance",       metric:"Macro-F1", dataset:"Elliptic",       n:18, avg:0.706, std:0.271, high:0.891, low:0.403,
    desc:"Temporal inductive node classification on Bitcoin transaction graphs; illicit transactions < 3% of nodes.",
    repo:"https://github.com/faranbutt/GraphFMD", lb:"https://faranbutt.github.io/GraphFMD/" },
  { id:"C10", name:"NetLinkArena",   diff:"Med",    cat:"Homo",    task:"Link", domain:"Academic",      metric:"AUC-ROC",  dataset:"CiteSeer",       n:17, avg:0.706, std:0.271, high:0.891, low:0.508,
    desc:"Link prediction on a perturbed scientific citation graph; models must learn latent representations from topology and attributes alone.",
    repo:"https://github.com/ignatiusbalayo/NetLinkArena", lb:"https://ignatiusbalayo.github.io/NetLinkArena/leaderboard.html" },
  { id:"C11", name:"PARK-GNN",       diff:"Hard",   cat:"Homo",    task:"Node", domain:"Medical",       metric:"Macro-F1", dataset:"UCI Parkinson's",n:14, avg:0.773, std:0.116, high:0.933, low:0.548,
    desc:"Node classification for Parkinson's detection from acoustic voice recordings; KNN graph on 22-dimensional acoustic features.",
    repo:"https://github.com/AiIkram/gnn-parkinsons-challenge", lb:"https://aiikram.github.io/gnn-parkinsons-challenge/leaderboard.html" },
  { id:"C12", name:"GNN-CoRA",       diff:"Med",    cat:"Homo",    task:"Node", domain:"Academic",      metric:"Accuracy", dataset:"Cora",           n:14, avg:0.551, std:0.196, high:0.742, low:0.153,
    desc:"Node classification on a noisy citation network; Gaussian noise injected into 1433-dimensional bag-of-words features.",
    repo:"https://github.com/tasneem-mselim/GNN_CoRA", lb:"https://tasneem-mselim.github.io/GNN_CoRA/final_leaderboard.html" },
  { id:"C13", name:"GTA",            diff:"Hard",   cat:"Gen",     task:"Graph", domain:"Bioinformatics",metric:"Macro-F1", dataset:"MUTAG",          n:16, avg:0.582, std:0.163, high:0.790, low:0.250,
    desc:"Binary graph classification of molecular mutagenicity under clean and feature-perturbed conditions; robustness gap is a secondary metric.",
    repo:"https://github.com/idrees11/GTA-Graph-Topology-Ablation", lb:"https://idrees11.github.io/GTA-Graph-Topology-Ablation/index.html" },
  { id:"C14", name:"BrainAge",       diff:"Easy",   cat:"Homo",    task:"Regression", domain:"Neuroimaging", metric:"MAE", dataset:"OASIS-3",       n:14, avg:6.531, std:1.474, high:10.638, low:4.984,
    desc:"Graph regression for chronological age prediction from structural brain connectomes; 68-node Desikan-Killiany atlas.",
    repo:"https://github.com/bjayadikary/brain-age-gnn-oasis3", lb:"https://bjayadikary.github.io/brain-age-gnn-oasis3/leaderboard.html" },
  { id:"C15", name:"OctoNode Cup",   diff:"Med",    cat:"Homo",    task:"Node", domain:"Social",        metric:"Macro-F1", dataset:"GitHub Social",  n:15, avg:0.672, std:0.151, high:0.793, low:0.211,
    desc:"Binary node classification of GitHub users (Web vs ML developers) on a 37.7K-node social graph.",
    repo:"https://github.com/El-Ikram/OctoNode_Cup", lb:"https://el-ikram.github.io/OctoNode_Cup/leaderboard.html" },
  { id:"C16", name:"Graph4ASD",      diff:"Med",    cat:"Homo",    task:"Graph", domain:"Neuroimaging", metric:"Macro-F1", dataset:"ABIDE",          n:14, avg:0.513, std:0.082, high:0.627, low:0.389,
    desc:"Binary classification of brain connectivity graphs (ASD vs typical control); node features restricted to identity descriptors.",
    repo:"https://github.com/RosePY/Graph4ASD-Challenge", lb:"https://rosepy.github.io/Graph4ASD-Challenge/docs/leaderboard.html" },
  { id:"C17", name:"Mix2Print",      diff:"Hard",   cat:"Homo",    task:"Regression", domain:"Bioprinting", metric:"NMAE", dataset:"CECT",          n:13, avg:0.08, std:0.02, high:0.147, low:0.069,
    desc:"Graph regression for 3D bioprinting parameter prediction (pressure, temperature, speed) from bioink formulation graphs.",
    repo:"https://github.com/VinitSingroha/Mix2Print", lb:"https://vinitsingroha.github.io/Mix2Print/leaderboard.html" },
  { id:"C18", name:"THInC",          diff:"Hard",   cat:"Spatial", task:"Node", domain:"Biomedical",    metric:"Macro-F1", dataset:"NuCLS",          n:14, avg:0.490, std:0.056, high:0.565, low:0.354,
    desc:"Inductive cell-type classification on histopathology spatial graphs; 4-class prediction generalized to entirely unseen patients.",
    repo:"https://github.com/emmakowu3579-ui/inductive-class-challenge", lb:"https://emmakowu3579-ui.github.io/inductive-class-challenge/" },
];


/* ──────────── LLM leaderboard data ─────────────────────────────────── */
// Scores: [C03, C08, C01, C05, C07, C09, C10, C12, C15, C16, C02, C04, C06, C13, C18]
// meanGap: average |gap to human top| across competitions (lower=better, sign-corrected)

/* ──────────── LLM leaderboard data ─────────────────────────────────── */
// Scores: [C03, C08, C01, C05, C07, C09, C10, C11, C12, C15, C16, C02, C04, C06, C13, C18]
// meanGap: average |gap to human top| across competitions (lower=better, sign-corrected)
const LLM_MODELS = [
  { name:"Claude Opus 4.7†",   family:"proprietary_reasoning", mode:"Agent",
    scores:[97.6,99.8,78.1,55.4,83.0,76.2,69.6,90.2,55.1,74.6,60.8,32.6,44.0,76.9,79.1,57.2]},
  { name:"Gemini 2.5 Pro",     family:"proprietary_reasoning", mode:"Non-Agent",
    scores:[93.6,92.7,75.5,61.9,83.0,83.6,87.5,71.2,64.8,54.1,48.8,40.7,29.0,48.9,65.7,36.0]  },
  { name:"GPT-5.4 Codex†",    family:"proprietary_reasoning", mode:"Agent",
    scores:[70.7,88.9,50.2,53.4,44.4,77.6,83.9,84.6,74.0,71.8,45.7,36.2,52.0,72.5,83.5,48.6] },
  { name:"Claude Opus 4.6",    family:"proprietary_chat",      mode:"Non-Agent",
    scores:[95.4,98.3,85.4,45.2,83.0,81.8,78.1,52.9,81.6,65.5,55.4,40.7,28.0,78.3,69.3,54.2] },
  { name:"Gemini-3 Flash",     family:"proprietary_chat",      mode:"Non-Agent",
    scores:[97.6,98.8,81.1,53.2,76.2,78.0,68.3,93.3,69.7,74.9,51.5,33.5,38.0,49.5,59.5,47.9] },
  { name:"DeepSeek-v4 Pro",    family:"opensource_reasoning",  mode:"Non-Agent",
    scores:[95.2,73.0,79.4,53.5,83.0,78.1,66.5,42.6,70.0,54.2,32.9,15.6,30.0,74.4,39.7,43.1] },
  { name:"Kimi k2.6",          family:"opensource_chat",       mode:"Non-Agent",
    scores:[96.4,42.9,48.4,52.1,83.0,95.9,71.4,88.0,70.5,70.4,64.0,43.0,48.0,49.3,79.1,57.2] },
  { name:"Qwen2.5-Coder 32B",  family:"opensource_chat",       mode:"Non-Agent",
    scores:[96.6,66.6,77.1,39.1,40.0,69.8,54.8,42.6,80.0,52.5,44.1,19.6,31.0,50.2,25.5,38.4] },
  { name:"Llama-3.3 70B",      family:"opensource_chat",       mode:"Non-Agent",
    scores:[79.4,66.2,72.7,39.1,40.0,72.8,50.0,51.1,65.9,42.9,39.4,46.7,38.0,32.9,63.8,37.6] },
];
const HUMAN_TOP = [98.0,99.6,90.0,67.4,83.0,80.6,89.1,93.3,74.2,79.3,62.7,53.7,60.0,82.2,79.9,56.5];
const HUMAN_MEAN_GAP = 0; // reference


// const LLM_MODELS = [
//   { name:"Claude Opus 4.7†", family:"proprietary_reasoning", mode:"Agent",
//     scores:[97.6,99.8,78.1,55.4,83.0,76.2,69.6,55.1,74.6,60.8,32.7,44.0,76.9,79.1,57.2], meanGap:14.8 },

//   { name:"Gemini 2.5 Pro", family:"proprietary_reasoning", mode:"Non-Agent",
//     scores:[93.6,92.7,75.5,61.9,83.0,83.6,87.5,64.8,54.1,48.8,40.7,29.0,48.8,65.7,36.0], meanGap:17.9 },

//   { name:"GPT-5.4 Codex†", family:"proprietary_reasoning", mode:"Agent",
//     scores:[70.7,88.9,50.3,53.4,44.4,77.6,83.9,74.0,71.8,45.7,36.2,52.0,72.5,83.5,48.6], meanGap:18.2 },

//   { name:"Claude Opus 4.6", family:"proprietary_chat", mode:"Non-Agent",
//     scores:[95.4,98.3,85.4,45.2,83.0,81.8,78.1,81.6,65.4,55.4,40.7,28.0,78.3,69.3,54.2], meanGap:16.3 },

//   { name:"Gemini-3 Flash", family:"proprietary_chat", mode:"Non-Agent",
//     scores:[97.6,98.8,81.1,53.2,76.2,78.0,68.3,69.7,74.9,51.5,33.5,38.0,49.5,59.5,47.9], meanGap:17.4 },

//   { name:"DeepSeek-v4 Pro", family:"opensource_reasoning", mode:"Non-Agent",
//     scores:[95.2,73.0,79.4,53.5,83.0,78.1,66.5,70.0,54.2,32.9,15.6,30.0,74.4,39.7,43.1], meanGap:22.1 },

//   { name:"Kimi k2.6", family:"opensource_chat", mode:"Non-Agent",
//     scores:[96.4,42.9,48.4,52.1,83.0,95.9,71.4,70.5,70.4,64.0,43.0,48.0,49.3,79.1,57.2], meanGap:19.8 },

//   { name:"Qwen2.5-Coder 32B", family:"opensource_chat", mode:"Non-Agent",
//     scores:[96.6,66.6,77.1,39.1,40.0,69.8,54.8,80.0,52.5,44.1,19.6,31.0,50.2,25.5,38.4], meanGap:26.5 },

//   { name:"Llama-3.3 70B", family:"opensource_chat", mode:"Non-Agent",
//     scores:[79.4,66.2,72.7,39.1,40.0,72.8,50.0,65.9,42.9,39.4,46.7,38.0,32.9,63.8,37.6], meanGap:29.9 },
// ];

// const HUMAN_TOP = [
//   98.0,99.6,90.0,67.4,83.0,
//   80.6,89.1,74.2,79.3,62.7,
//   53.7,60.0,82.2,79.9,56.5
// ];

// const HUMAN_MEAN_GAP = 0; // reference



/* ──────────── Render tasks ─────────────────────────────────────────── */
function renderTasks(data) {
  const grid = document.getElementById('task-grid');
  grid.innerHTML = '';
  data.forEach(c => {
    const el = document.createElement('div');
    el.className = 'task-card';
    el.dataset.name = (c.name + c.domain + c.dataset + c.cat + c.task).toLowerCase();
    el.dataset.diff = c.diff;
    el.dataset.cat  = c.cat;
    el.dataset.task = c.task;

    const catLabel = {Homo:'Homogeneous',Hetero:'Heterogeneous',Spatial:'Spatial',
      Temp:'Temporal',Hier:'Hierarchical',Gen:'Generalization',Mol:'Molecular'}[c.cat] || c.cat;
    const diffLabel = {Med:'Medium'}[c.diff] || c.diff;
    const taskLabel = {Node:'Node Classif.',Graph:'Graph Classif.',
      Link:'Link Pred.',Regression:'Graph Regression'}[c.task] || c.task;

    el.innerHTML = `
      <div class="tag-row">
        <span class="tag ${c.diff}">${diffLabel}</span>
        <span class="tag Cat">${catLabel}</span>
        <span class="tag Task">${taskLabel}</span>
      </div>
      <h3><span style="color:var(--ink-3);font-family:var(--font-mono);font-size:0.9rem;">${c.id}</span> ${c.name}</h3>
      <p class="task-desc">${c.desc}</p>
      <p class="task-desc"><b>Domain: </b>${c.domain}</p>
      <p class="task-desc"><b>Dataset:</b> ${c.dataset}</p>
      
      <div class="card-links">
        <a class="card-link" href="${c.repo}" target="_blank" rel="noopener">Repository</a>
        <a class="card-link" href="${c.lb}"   target="_blank" rel="noopener">Leaderboard</a>
      </div>`;

    grid.appendChild(el);
  });
}

window.filterLB = filterLB;
window.sortLB = sortLB;

function filterTasks() {
  const q    = (document.getElementById('comp-search')?.value || '').toLowerCase().trim();
  const diff = document.getElementById('comp-diff').value;
  const cat  = document.getElementById('comp-cat').value;
  const task = document.getElementById('comp-task').value;

  document.querySelectorAll('.task-card').forEach(el => {
    const ok =
      el.dataset.name.includes(q) &&
      (diff === 'all' || el.dataset.diff === diff) &&
      (cat  === 'all' || el.dataset.cat  === cat)  &&
      (task === 'all' || el.dataset.task === task);
    el.style.display = ok ? '' : 'none';
  });
}

if (document.getElementById('comp-search')) {
  document.getElementById('comp-search').addEventListener('input', filterTasks);
  document.getElementById('comp-diff').addEventListener('change', filterTasks);
  document.getElementById('comp-cat').addEventListener('change', filterTasks);
  document.getElementById('comp-task').addEventListener('change', filterTasks);
}

if (document.getElementById('task-grid')) {
  renderTasks(COMPETITIONS);
}


/* ──────────── Render human table ───────────────────────────────────── */
function renderHuman() {
  const tbody = document.getElementById('human-tbody');
  if (!tbody) return;
  COMPETITIONS.forEach((c, i) => {
    const tr = document.createElement('tr');
    const diffLabel = {Med:'Medium'}[c.diff] || c.diff;
    const isReg = c.metric === 'MAE' || c.metric === 'NMAE';
    tr.innerHTML = `
      <td><span class="rank">${c.id}</span></td>
      <td class="model-cell"><span class="model-name">${c.name}</span><br/><span class="model-sub">${c.domain} · ${c.dataset}</span></td>
      <td><span class="tag ${c.diff}" style="font-size:0.78rem;">${diffLabel}</span></td>
      <td>${c.n}</td>
      <td style="font-family:var(--font-mono);font-size:0.88rem;">${c.metric}</td>
      <td class="score-val">${c.avg.toFixed(isReg?2:3)}</td>
      <td class="score-val" style="color:var(--ink-3)">${c.std.toFixed(isReg?2:3)}</td>
      <td class="score-val" style="color:var(--easy)">${c.high.toFixed(isReg?2:3)}</td>
      <td class="score-val" style="color:var(--red)">${c.low.toFixed(isReg?2:3)}</td>`;
    tbody.appendChild(tr);
  });
}
renderHuman();

let humanSortAsc = true;
function sortHuman(col) {
  const tbody = document.getElementById('human-tbody');
  const rows  = Array.from(tbody.rows);
  rows.sort((a, b) => {
    const va = a.cells[col].innerText.trim();
    const vb = b.cells[col].innerText.trim();
    const na = parseFloat(va.replace(/[^\d.-]/g, ''));
    if (!isNaN(na) && !isNaN(parseFloat(vb.replace(/[^\d.-]/g, '')))) {
      return humanSortAsc ? na - parseFloat(vb) : parseFloat(vb) - na;
    }
    return humanSortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
  });
  rows.forEach(r => tbody.appendChild(r));
  humanSortAsc = !humanSortAsc;
}

/* ──────────── Render LLM leaderboard ─────────────────────────────── */
// Indices of scores array → [C03,C08,C14,C01,C05,C07,C09,C10,C12,C15,C16,C02,C04,C06,C13,C17,C18]
// HUMAN_TOP same order
const LOWER_BETTER_IDX = new Set([2, 15]); // C14(MAE), C17(NMAE)

function fmtScore(val, idx, htop) {
  if (val === null || val === undefined) return '<span style="color:var(--ink-3)">—</span>';
  const isLB = LOWER_BETTER_IDX.has(idx);
  const gap = isLB ? htop - val : val - htop; // positive = above human
  const disp = val.toFixed(1);
  let cls, sym;
  if (gap >= -0.1) { cls = 'gap-above'; sym = '↑'; }
  else if (gap >= -5.0) { cls = 'gap-close'; sym = '↓'; }
  else { cls = 'gap-behind'; sym = '↓'; }
  const gapStr = Math.abs(gap).toFixed(1);
  return `<span class="score-val">${disp}</span><br/><span class="gap-cell ${cls}" style="font-size:0.78rem;">${sym}${gapStr}</span>`;
}

function renderLB(models) {
  const tbody = document.getElementById('lb-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  // Sort by computed mean gap ascending
  const computeGap = m => m.scores.reduce((s,v,i) => s + Math.abs(v - HUMAN_TOP[i]), 0) / m.scores.length;
  const sorted = [...models].sort((a,b) => computeGap(a) - computeGap(b));

  sorted.forEach((m, i) => {
    const tr = document.createElement('tr');
    tr.dataset.type = m.family;

    const typeLabel = m.family.includes('reasoning') ? 'Reasoning' : 'Chat';
    const typeCls   = m.family.includes('reasoning') ? 'type-reasoning' : 'type-chat';
    const sourceLabel = m.family.includes('opensource') ? '🌐' : '🔒';

    let rankStr;
    if (i === 0) rankStr = '<span class="rank rank-1">🥇 1</span>';
    else if (i === 1) rankStr = '<span class="rank rank-2">🥈 2</span>';
    else if (i === 2) rankStr = '<span class="rank rank-3">🥉 3</span>';
    else rankStr = `<span class="rank">${i+1}</span>`;

    const scoreCells = m.scores.map((s, si) => `<td>${fmtScore(s, si, HUMAN_TOP[si])}</td>`).join('');

    tr.innerHTML = `
    <td>${rankStr}</td>
    <td class="model-cell">
      <span class="model-name">${m.name}</span><br/>
      <span class="model-sub">${m.mode} · ${sourceLabel}</span>
    </td>
    <td><span class="type-badge ${typeCls}">${typeLabel}</span></td>
    <td style="font-size:0.88rem;color:var(--ink-2);">${m.mode}</td>
    ${scoreCells}
  `;
  tbody.appendChild(tr);
});

// Human reference row
const htr = document.createElement('tr');
htr.className = 'human-row';
const hScores = HUMAN_TOP.map((v, i) =>
  `<td><span class="score-val" style="color:var(--orange);">${v.toFixed(1)}</span></td>`
).join('');
htr.innerHTML = `
  <td><span class="rank" style="color:var(--orange);">H</span></td>
  <td class="model-cell"><span class="model-name" style="color:var(--orange);">Human Top</span><br/><span class="model-sub">Best human submission per competition</span></td>
  <td colspan="2"><span class="type-badge" style="background:rgba(210,153,34,0.12);color:var(--orange);">Human</span></td>
  ${hScores}`;
tbody.appendChild(htr);
}
renderLB(LLM_MODELS);

let currentFilter = 'all';

function filterLB(f, btn) {
  currentFilter = f;
  // Update active button style
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Filter models based on family
  let filteredModels = LLM_MODELS;
  if (f !== 'all') {
    filteredModels = LLM_MODELS.filter(m => m.family === f);
  }

  // Re-render the table with filtered models
  renderLB(filteredModels);
}

let lbSortCol = 21, lbSortAsc = true;

function sortLB(col) {
  lbSortCol = col;
  lbSortAsc = (lbSortCol === col) ? !lbSortAsc : true;
  
  // Get currently visible models (based on currentFilter)
  let modelsToSort = (currentFilter === 'all') ? [...LLM_MODELS] : LLM_MODELS.filter(m => m.family === currentFilter);
  
  // Sort by the selected column (the mean gap column is index 21, but we need to sort by the column's numeric value)
  // For simplicity, we'll sort by meanGap if column index is 21, otherwise by the score of that competition.
  // However, the column indices: 0=#,1=Model,2=Type,3=Mode, then competition columns (C03..C18) at indices 4..20, then Mean Gap at 21.
  if (col === 21) {
    const cg = m => m.scores.reduce((s,v,i) => s + Math.abs(v - HUMAN_TOP[i]), 0) / m.scores.length;
    modelsToSort.sort((a,b) => lbSortAsc ? cg(a) - cg(b) : cg(b) - cg(a));
  } else if (col >= 4 && col <= 20) {
    const compIdx = col - 4; // mapping to scores array index
    modelsToSort.sort((a,b) => {
      let va = a.scores[compIdx];
      let vb = b.scores[compIdx];
      if (va === undefined) va = -Infinity;
      if (vb === undefined) vb = -Infinity;
      return lbSortAsc ? va - vb : vb - va;
    });
  }
  
  // Re-render the sorted, filtered list
  renderLB(modelsToSort);
}

/* ──────────── Citation copy ─────────────────────────────────────────── */
function copyCitation() {
  const txt = document.getElementById('citation-text').innerText;
  navigator.clipboard.writeText(txt).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = '✓ Copied!';
    setTimeout(() => btn.textContent = 'Copy BibTeX', 2000);
  });
}

/* ──────────── Active nav link on scroll ─────────────────────────────── */
const sections = ['overview','figures','competitions','protocols','human','leaderboard'];
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});

/* ──────────── Author roster (avatars + OpenReview links) ───────────── */
const LEAD_AUTHOR = { name: "Islem Rekik", url: "https://basira-lab.com/", image: "fig/authors/rekik.jpg",
  email: "islem.rekik@gmail.com", affiliation: "Imperial College London", country: "UK" };

const AUTHORS = [
  { name: "Murad Hossen",                 url: "https://openreview.net/profile?id=~Murad_Hossen1",                 image: "fig/authors/murad.png",
    email: "murad09buet@gmail.com", affiliation: "University of Houston, Houston, Texas, USA", country: "USA" },
  { name: "Tasneem Selim",                url: "https://openreview.net/profile?id=~Tasneem_Selim1",                image: "fig/authors/tasneem.jpg",
    email: "tasneem.mselim@gmail.com", affiliation: "Faculty of Science, Alexandria University, Alexandria, Egypt", country: "Egypt" },
  { name: "Gurur Gamgam",                 url: "https://openreview.net/profile?id=~Gurur_Gamgam2",                 image: "fig/authors/Gurur%20Gamgam.png",
    email: "gururgamgam12@gmail.com", affiliation: "Bogazici University", country: "Turkey" },
  { name: "Tuga Yousif",                  url: "https://openreview.net/profile?id=~Tuga_Yousif2",                  image: "fig/authors/Tuga.jpg",
    email: "tugakariem@gmail.com", affiliation: "Ankara Yıldırım Beyazıt University", country: "Turkey" },
  { name: "Abderrahmane Kasmi",           url: "https://openreview.net/profile?id=~Abderrahmane_Kasmi1",           image: "fig/authors/Abderrahmane%20Kasmi.jpg",
    email: "ja_kasmi@esi.dz", affiliation: "National Higher School of Computer Science, Algiers", country: "Algeria" },
  { name: "Ikram Aissiou",               url: "https://openreview.net/profile?id=~Ikram_Aissiou1",               image: "fig/authors/Aissiou_Ikram.png",
    email: "aissiouikram47@gmail.com", affiliation: "University of Algiers 1 Ben youcef Benkhadda", country: "Algeria" },
  { name: "Mubaraq Onipede",              url: "https://openreview.net/profile?id=~Mubaraq_Onipede1",              image: "fig/authors/Mubaraq%20Onipede.jpeg",
    email: "mubaraqgbolahan014@gmail.com", affiliation: "York St John University, London", country: "UK" },
  { name: "Faran Taimoor Butt",           url: "https://openreview.net/profile?id=~Faran_Taimoor_Butt4",           image: "fig/authors/Faran%20Taimoor%20Butt.jpg",
    email: "faranbutt0336@gmail.com", affiliation: "National Center of Artificial Intelligence (NCAI), Pakistan / Air University, Pakistan", country: "Pakistan" },
  { name: "Sanae Zrigui",                 url: "https://openreview.net/profile?id=~Sanae_Zrigui1",                 image: "fig/authors/Sanae_Zrigui.jpg",
    email: "zrigui.sanae@gmail.com", affiliation: "LSISI, National School of Applied Sciences Oujda, Mohammed Premier University, Oujda", country: "Morocco" },
  { name: "Rosa Y. G. Paccotacya-Yanque", url: "https://openreview.net/profile?id=~Rosa_Y._G._Paccotacya-Yanque1", image: "fig/authors/Rosa.jpeg",
    email: "rypaccotacya@ucsp.edu.pe", affiliation: "Department of Computing, Universidad Católica San Pablo, Arequipa, Perú", country: "Peru" },
  { name: "Ignatius Balayo",              url: "https://openreview.net/profile?id=~Ignatius_Balayo1",              image: "fig/authors/IgnatiusBalayo_1.jpeg",
    email: "ibalayo244544@busitema.ac.ug", affiliation: "Faculty of Engineering and Technology, AI and Interdisciplinary Research Group, Busitema University", country: "Uganda" },
  { name: "Ikram Elhouiti",               url: "https://openreview.net/profile?id=~Ikram_Elhouiti1",               image: "fig/authors/Ikram_Elhouiti.jpg",
    email: "ik.elhouiti@gmail.com", affiliation: "University of Laghouat, Algeria", country: "Algeria" },
  { name: "Hadil Affes",                  url: "https://openreview.net/profile?id=~Hadil_Affes3",                  image: "fig/authors/hadil%20Affes.png",
    email: "affeshadil1@gmail.com", affiliation: "Higher Institute of Computer Science (ISI), University of Tunis El Manar, Tunisia", country: "Tunisia" },
  { name: "Bijay Adhikari",               url: "https://openreview.net/profile?id=~Bijay_Adhikari1",               image: "fig/authors/Bijay%20Adhikari.jpg",
    email: "bjayadikari.ba@gmail.com", affiliation: "Institute of Science and Technology, Tribhuvan University", country: "Nepal" },
  { name: "Sargam Goyal",                 url: "https://openreview.net/profile?id=~Sargam_Goyal1",                 image: "fig/authors/Sargam%20Goyal.jpeg",
    email: "sargam_g@mfs.iitr.ac.in", affiliation: "Indian Institute of Technology Roorkee", country: "India" },
  { name: "Muhammad Ibrahim Isah",        url: "https://openreview.net/profile?id=~Muhammad_Ibrahim_Isah1",        image: "fig/authors/Muhammad_ibrahim.PNG",
    email: "mii1900425.swe@buk.edu.ng", affiliation: "Shobhit Institute of Engineering and Technology", country: "India" },
  { name: "Mohammad Idrees Bhat",         url: "https://openreview.net/profile?id=~Mohammad_Idrees_Bhat1",         image: "fig/authors/Mohammad_idrees_Bhat.png",
    email: "idrees11@yahoo.com", affiliation: "School of Computer Science and Engineering, Dr. Vishwanath Karad MIT World Peace University, Pune, India", country: "India" },
  { name: "Samuel Kangoni Matia",         url: "https://openreview.net/profile?id=~Samuel_Kangoni_Matia1",         image: "fig/authors/Samuel%20Matia.jpeg",
    email: "ssamat0020@gmail.com", affiliation: "Department of Electrical and Computer Engineering, University of Kinshasa", country: "DR Congo" },
  { name: "Peguy Kem-Meka Tiotsop Kadzue",url: "https://openreview.net/profile?id=~Peguy_Kem-Meka_Tiotsop_Kadzue1",image: "fig/authors/Peguy%20Kem-Meka%20Tiotsop%20Kadzue.png",
    email: "2788627@students.wits.ac.za", affiliation: "University of Bertoua | Wits University | AIMS RIC", country: "Cameroon / South Africa / Rwanda" },
  { name: "Maha Trabelsi",                url: "https://openreview.net/profile?id=~Maha_Trabelsi2",                image: "fig/authors/Maha_trabelsi.PNG",
    email: "maha.trabelsi@etudiant-isi.utm.tn", affiliation: "Higher Institute of Computer Science (ISI), University of Tunis El Manar, Tunisia", country: "Tunisia" },
  { name: "Emmanuel Owusu",               url: "https://openreview.net/profile?id=~Emmanuel_Owusu2",               image: "fig/authors/Emmanuel_Owusu.jpeg",
    email: "eowusu396@st.knust.edu.gh", affiliation: "Kwame Nkrumah University of Science and Technology", country: "Ghana" },
  { name: "Vinit",                        url: "https://openreview.net/profile?id=~Vinit2",                       image: "fig/authors/Vinit%20Singroha.jpeg",
    email: "vineet10338@gmail.com", affiliation: "Netaji Subhas University of Technology, Delhi", country: "India" },
  { name: "Nour Majdoub",                 url: "https://openreview.net/profile?id=~Nour_Majdoub1",                 image: "fig/authors/Nour_Majdoub.jpg",
    email: "nourelhoudamajdoub1@gmail.com", affiliation: "Higher Institute of Informatics and Mathematics of Monastir (ISIMM), Tunisia", country: "Tunisia" },
  { name: "Tamiru Alemnew",               url: "https://openreview.net/profile?id=~Tamiru_Alemnew1",               image: "fig/authors/Tamiru.jpg",
    email: "tamiru.almnew-ug@aau.edu.et", affiliation: "Addis Ababa University", country: "Ethiopia" }
];
const AVATAR_PALETTE = ['#2ea043','#1f6feb','#a371f7','#db6d28','#3fb950','#d29922','#f778ba','#58a6ff'];

function initialsOf(name) {
  const parts = name.replace(/\./g, '').split(/\s+/).filter(Boolean);
  const first = parts[0] ? parts[0][0] : '';
  const last  = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function hashColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return AVATAR_PALETTE[h % AVATAR_PALETTE.length];
}

function authorCardHTML(author, isLead) {
  const avatarCls = 'author-avatar' + (isLead ? ' lead-avatar' : '');
  const cardCls   = 'author-card' + (isLead ? ' lead-card' : '');
  const fallback  = `this.onerror=null;this.replaceWith(Object.assign(document.createElement('span'),{className:'${avatarCls}',style:'background:${hashColor(author.name)}',textContent:'${initialsOf(author.name)}'}));`;
  return `
    <a class="${cardCls}" href="${author.url}" target="_blank" rel="noopener">
      <img class="${avatarCls}" src="${author.image}" alt="${author.name}" loading="lazy" onerror="${fallback}">
      <span class="author-name">${author.name}</span>
      <span class="author-meta">
        <span class="author-affil">${author.affiliation || ''}</span>
        <span class="author-country">${author.country || ''}</span>
      </span>
    </a>`;
}

function renderAuthors() {
  const leadEl = document.getElementById('lead-author');
  const gridEl = document.getElementById('authors-grid');
  if (leadEl) leadEl.innerHTML = authorCardHTML(LEAD_AUTHOR, true);
  if (gridEl) gridEl.innerHTML = AUTHORS.map(a => authorCardHTML(a, false)).join('');
}
renderAuthors();

/* ──────────── Reflections page ─────────────────────────────────────── */
const REFLECTIONS = [
  { name: "Tasneem Selim",         github: "https://github.com/tasneem-mselim", image: "fig/authors/tasneem.jpg",
    text: "A truly enriching experience, both professionally and personally. ❤️‍🔥 Working with Dr. Rekik and publishing at such a prestigious conference was a dream. Alhamdulillah!" },
  { name: "Ikram Aissiou",         github: "https://github.com/AiIkram/", image: "fig/authors/Aissiou_Ikram.png",
    text: "G4RS taught me much more than GNNs and research. It challenged me to think differently, learn from people with very different backgrounds, and grow more confident in my own way of doing research💡. More than anything, it reminded me that research is not only about what you build, but also about the people you learn from and the journey you share along the way." },
  { name: "Tuga Yousif",           github: "https://github.com/TugaAhmed", image: "fig/authors/Tuga.jpg",
    text: "Through G4RS, I grew both personally and professionally while connecting with inspiring individuals. Overall, it was an amazing journey." },
  { name: "Mohammad Idrees Bhat",  github: "https://github.com/idrees11", image: "fig/authors/Mohammad_idrees_Bhat.png",
    text: "It was good to collaborate with the people all around the Globe." },
  { name: "Maha Trabelsi",         github: "https://github.com/mahatrabelsi1", image: "fig/authors/Maha_trabelsi.PNG",
    text: "My experience in the G4RS programme was truly special. As a bachelor's student, I had little knowledge of the AI and deep learning world🌍, so joining a programme surrounded by people with expertise in these fields was challenging at first. However, thanks to Dr. Islem's guidance, learning the basics of GNNs became much easier. Being able to contribute to a scientific paper was also a huge opportunity and a valuable addition to my experience." },
  { name: "Mubaraq Onipede",       github: "https://github.com/Mubarraqqq", image: "fig/authors/Mubaraq%20Onipede.jpeg",
    text: "It was September 2025 when I filed my application to be mentored by Dr Islem Rekik. From the maths behind message passing to an accepted conference paper, and now a possibility to contribute on a greater global stage, the sky is just the stepping stone." },
  { name: "Ikram Elhouiti",        github: "https://github.com/El-Ikram", image: "fig/authors/Ikram_Elhouiti.jpg",
    text: "G4RS has been an incredible experience! Far beyond learning GNNs, it showed me that the real beauty of learning lies in the people you meet, the ideas you share, and the challenges you overcome together." },  { name: "Ignatius Balayo",       github: "https://github.com/ignatiusbalayo", image: "fig/authors/IgnatiusBalayo_1.jpeg",
    text: "I learned that there are levels to things in this world🌍. G4RS started as a playing field for rising stars, but we ended up becoming real researchers, conducting experiments across continents while working towards a common goal." },
  { name: "Abderrahmane Kasmi",    github: "https://github.com/abdksm", image: "fig/authors/Abderrahmane%20Kasmi.jpg",
    text: "G4RS was a great success, thanks to the excellent mentor and the ambitious participants. I learned a lot from everyone involved." },
  { name: "Peguy Kem-Meka Tiotsop Kadzue", github: "https://github.com/KEMPEGUY", image: "fig/authors/Peguy%20Kem-Meka%20Tiotsop%20Kadzue.png",
    text: "The G4RS program gave me the opportunity to connect my PhD research in graph neural networks with practical benchmark evaluation. Contributing to GNN-CB and seeing our work accepted at EMNLP 2026 made the experience truly rewarding." },
  { name: "Nour Majdoub",          github: "https://github.com/NoorMajdoub", image: "fig/authors/Nour_Majdoub.jpg",
    text: "G4RS was a great experience, and I'm genuinely grateful for everyone who was part of it. Proud of what we managed to build together." },
  { name: "Vinit Singroha",        github: "https://github.com/VinitSingroha", image: "fig/authors/Vinit%20Singroha.jpeg",
    text: "What stood out most was that this whole program ran on people just showing up, week after week, with no real incentive except wanting to learn and to build something good." },
  { name: "Faran Taimoor Butt",    github: "https://github.com/faranbutt", image: "fig/authors/Faran%20Taimoor%20Butt.jpg",
    text: "G4RS was the starting point for me to step into real research and discover the world of Graph Neural Networks. I collaborated with people from different backgrounds and together we turned ideas into meaningful research." },
  { name: "Samuel Kangoni Matia",  github: "https://github.com/samuelmatia", image: "fig/authors/Samuel%20Matia.jpeg",
    text: "G4RS was a transformative experience for me. It gave me a strong foundation in GNNs and graph-based methods, which helped me secure a place in the Oxford MIORPA program." },
  { name: "Muhammad Ibrahim Isah", github: "https://github.com/Muhammad0isah", image: "fig/authors/Muhammad_ibrahim.PNG",
    text: "G4RS turned my interest in GNNs into a research direction, connecting graph learning with the medical imaging problems I care about." },
  { name: "Bijay Adhikari",        github: "https://github.com/bjayadikary", image: "fig/authors/Bijay%20Adhikari.jpg",
    text: "G4RS has been truly special to me, showing me what a dedicated team can achieve through collaboration and guidance. As someone fascinated by brain imaging analysis, G4RS introduced me to the right tools to explore that passion.🚀" },
  { name: "Tamiru Alemnew",        github: "https://github.com/Tamiru-Alemnew", image: "fig/authors/Tamiru.jpg",
    text: "G4RS was more than learning GNNs. It gave me my first real taste of research, from exploring ideas and running experiments to collaborating with people from different backgrounds." },
  { name: "Rosa Paccotacya-Yanque",github: "https://github.com/RosePY", image: "fig/authors/Rosa.jpeg",
    text: "Because of the time difference, G4RS meant joining sessions at around 2 a.m. every Sunday, and it was worth staying up for every time. I always learned something new, and I was always looking forward to the next Sunday✨." },
  { name: "Emmanuel Owusu",        github: "https://github.com/Emmanuel-Owusu", image: "fig/authors/Emmanuel_Owusu.jpeg",
    text: "G4RS has broadened my horizons in AI and ML as a whole. What I really loved was the challenge of building something and being a participant. I also struggled to extract meaningful information from mathematically intensive academic papers, but the structured questions provided by Prof. Islem really helped me and have stayed with me to this day. The time spent here was truly worth it. Thank you so much Prof. Islem and your whole team in BASIRA Lab." }
];

function reflectionSide(name, i) {
  let h = 0;
  for (let j = 0; j < name.length; j++) h = (h * 33 + name.charCodeAt(j)) >>> 0;
  return (h + i * 7) % 2 === 0 ? 'left' : 'right';
}

function assignReflectionSides(list) {
  const sides = list.map((r, i) => reflectionSide(r.name, i));
  for (let i = 2; i < sides.length; i++) {
    if (sides[i] === sides[i - 1] && sides[i] === sides[i - 2]) {
      sides[i] = sides[i] === 'left' ? 'right' : 'left';
    }
  }
  return sides;
}

function reflectionCardHTML(r, i, side) {
  return `
    <div class="reflection-card ${side}" style="--i:${i}">
      <div class="reflection-avatar-col">
        <img class="reflection-photo" src="${r.image}" alt="${r.name}" loading="lazy"
             onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('span'),{className:'reflection-photo reflection-fallback',style:'background:${hashColor(r.name)}',textContent:'${initialsOf(r.name)}'}));">
        <div class="reflection-name">
          <span>${r.name}</span>
        </div>
      </div>
      <div class="reflection-bubble">
        <p>${r.text}</p>
      </div>
    </div>`;
}

function renderReflections() {
  const el = document.getElementById('reflections-grid');
  if (!el) return;
  const sides = assignReflectionSides(REFLECTIONS);
  el.innerHTML = REFLECTIONS.map((r, i) => reflectionCardHTML(r, i, sides[i])).join('');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reflection-card').forEach(card => io.observe(card));
}
renderReflections();

})();
