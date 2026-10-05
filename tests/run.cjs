const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const {chromium}=require('playwright'),qa=require('./qa.cjs');
(async()=>{
  const output=path.join(__dirname,'results');fs.mkdirSync(output,{recursive:true});
  const browser=await chromium.launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
  try{
    const page=await browser.newPage();await page.goto(pathToFileURL(path.join(__dirname,'../index.html')).href);
    const report={};report.responsive=await qa.surfaces(page,output);report.controls=await qa.controls(page);report.feedback=await qa.feedback(page);report.sections=[];
    for(const [from,to] of [[0,10],[10,20],[20,29],[29,34]])report.sections.push(await qa.sections(page,from,to));
    await qa.reset(page);fs.writeFileSync(path.join(output,'qa.json'),JSON.stringify(report,null,2));console.log('Passed: responsive surfaces, controls, feedback and every Lesson 01 activity/section.');
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
