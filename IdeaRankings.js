function analyzeIdeas(ideas) {

  let expected ;
  let rankings =[] ;
  let sortedRankings =[] ;

 for (let i = 0; i < ideas.length; i++) {
    expected = (parseInt(ideas[i][1]) + 4 * parseInt(ideas[i][2]) + parseInt(ideas[i][3])/ 6) * ideas[i][0].length 

    rankings.push([expected,ideas[i][0] ])
 }
 rankings.sort((a,b) => a[0] -b[0])
 for( let i =0 ; i < rankings.length; i++){
    sortedRankings.push(rankings[i][1]);
 }
 return sortedRankings 
}


analyzeIdeas([["Add email notifications", 3, 7, 10], ["Migrate deployment flow", 6, 10, 16], ["Add push notifications", 2, 6, 10], ["Optimize continuous integration", 5, 8, 15], ["Analyze user patterns", 5, 10, 18], ["Create onboarding curriculum", 6, 15, 25]])