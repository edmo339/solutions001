/*
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
*/

function ghostBusters(building) {
    return building.replaceAll(" ","")
  }

  console.log(ghostBusters("Factor y"))
  console.log(ghostBusters("O  f fi ce"))
  console.log(ghostBusters("Bus St at ion"))