/* User-provided Data.pdf (18pp), premium tables pages 1-3,5,8,10-11,13,15,17-18.
   Indicative, unverified historical rates; null means the supplied source did not quote that age.
   There is no health-condition premium multiplier: underwriting is not inferable from questionnaire answers. */
(function(){
const ranges={
'medishield-life':[[1,20,145,190],[21,30,250,310],[31,40,395,525],[41,50,600,705],[51,60,890,1150],[61,70,1380,1740],[71,80,1820,2015]],
'aia-a':[[21,25,550],[26,30,686],[31,35,773],[36,40,843],[41,45,1050],[46,50,1320],[51,55,1780],[56,60,2366],[61,65,3150]],
'aia-b':[[21,25,400],[26,30,499],[31,35,568],[36,40,607],[41,45,716],[46,50,890],[51,55,1180],[56,60,1644],[61,65,2120]],
'ge-p':[[21,25,520],[26,30,640],[31,35,740],[36,40,820],[41,45,1010],[46,50,1280],[51,55,1710],[56,60,2280],[61,65,3020]],
'ge-a':[[21,25,360],[26,30,420],[31,35,480],[36,40,540],[41,45,650],[46,50,810],[51,55,1080],[56,60,1490],[61,65,1980]],
'income-p':[[1,20,310],[21,30,450],[31,35,520],[36,40,600],[41,50,1050],[51,60,1850],[61,65,3100]],
'income-a':[[1,20,220],[21,30,320],[31,35,370],[36,40,420],[41,50,710],[51,60,1180],[61,65,1980]],
'income-b':[[1,20,180],[21,30,270],[31,35,310],[36,40,350],[41,50,580],[51,60,910],[61,65,1420]],
'pru-premier':[[1,20,330],[21,30,480],[31,35,560],[36,40,650],[41,50,1120],[51,60,2050],[61,65,3350]],
'pru-plus':[[1,20,230],[21,30,330],[31,35,380],[36,40,440],[41,50,740],[51,60,1250],[61,65,2080]],
'pru-standard':[[1,20,170],[21,30,260],[31,35,300],[36,40,340],[41,50,560],[51,60,880],[61,65,1380]],
'singlife-1':[[1,20,155,310],[21,30,360,445],[31,40,465,635],[41,50,740,960],[51,60,1400,1870],[61,70,2500,3800]],
'singlife-2':[[1,20,90,180],[21,30,270,370],[31,40,325,400],[41,50,430,560],[51,60,820,1100],[61,70,1900,2500]],
'raffles-private':[[21,30,222,225],[31,40,345,348],[41,50,620,780],[51,60,1180,1550],[61,65,2100,2800]],
'raffles-a':[[21,30,180,200],[31,40,260,290],[41,50,450,530],[51,60,820,980],[61,65,1450,1800]],
'hsbc-a':[[1,20,310,330],[21,30,410,450],[31,35,510,530],[36,40,600,620],[41,50,900,1100],[51,60,1800,2300],[61,65,3290,4453]]
};
const bands={'0-20':[0,20],'21-30':[21,30],'31-40':[31,40],'41-50':[41,50],'51-60':[51,60],'61-70':[61,70],'70-80':[70,80],'80-90':[80,90],'>90':[91,120],'Below 60':[0,59],'60–69':[60,69],'70–79':[70,79],'80 or above':[80,120]};
const money=n=>'S$'+Number(n).toLocaleString('en-SG',{maximumFractionDigits:2,minimumFractionDigits:0});
function estimate(planId,age,residency){let b=bands[age], rows=ranges[planId];if(!rows||!b)return {status:'missing',message:'Choose an age band and a listed plan.'};if(planId==='medishield-life'&&residency==='No')return {status:'ineligible',message:'MediShield Life is for Singapore citizens and PRs.'};
const matching=rows.filter(r=>r[0]<=b[1]&&r[1]>=b[0]);if(!matching.length)return {status:'missing',message:'The supplied document has no premium figures for this age band.'};const lo=Math.min(...matching.map(r=>r[2])),hi=Math.max(...matching.map(r=>r[3]??r[2]));const unquoted=(b[0]===0?1:b[0])<Math.min(...matching.map(r=>r[0]))||b[1]>Math.max(...matching.map(r=>r[1]));return {status:unquoted?'partial':'quoted',lo,hi,monthlyLo:lo/12,monthlyHi:hi/12,message:unquoted?'Only part of your age band has quoted rates in the supplied document. Range is incomplete.':'Indicative annual premium from user-supplied policy schedule.',rows:matching.map(r=>({age:r[0]+'–'+r[1],lo:r[2],hi:r[3]??r[2]}))};}
function scenario(bill,deductible,coinsurance,limit){if(!Number.isFinite(bill)||bill<0||!Number.isFinite(deductible)||deductible<0||!Number.isFinite(coinsurance)||coinsurance<0||coinsurance>1)return null;const above=Math.max(0,bill-deductible),eligiblePaid=Math.min(above*(1-coinsurance),Number.isFinite(limit)?Math.max(0,limit):Infinity);return {paid:eligiblePaid,patient:bill-eligiblePaid};}
window.MG_COST={estimate,scenario,money,ranges,bands};
})();
