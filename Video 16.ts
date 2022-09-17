//* Interfaces with Classes

/*
  We've seen how interfaces work with objects (just like type aliases), but what of classes?
  To use interfaces with classes, you'll have to do something a bit different.
*/

interface footballTeam{
  name: string,
  tableRanking: number,

  format(): string
}

//* To create a class that will have the structure of interface "footballTeam"

class createFootballTeam implements footballTeam{
  name: string;
  tableRanking: number;

  constructor(name: string, ranking: number){
    this.name = name;
    this.tableRanking = ranking
  }

  format(): string {
    return `${this.name} FC is no. ${this.tableRanking} on the table`
  }
}

//* With the class above, any object created with it will have the structure of the "footballTeam" interface

let manchesterUnited = new createFootballTeam('Manchester United', 5)
let arsenal = new createFootballTeam('Arsenal', 3)