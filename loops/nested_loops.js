// Write your code below mutual friends
let bobsFollowers= ['vishal','priytam','ash','avi'];
let tinasFollowers= ['vishal','ash','levi'];
let mutualFollowers= [];
for (let i=0 ; i<bobsFollowers.length;i++)
{
  for (let j=0; j<tinasFollowers.length;j++)
  {
    if(bobsFollowers[i]=tinasFollowers[j])
    {
     console.log('mutual friends'+ tinasFollowers[j])
    }
    tinasFollowers[j]=mutualFollowers[];
  }
};
