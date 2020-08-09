class Thief{
    constructor(){
        this.name = null;
        this.age = 0;
        this.gender = null;
        this.imagePath = null;
        this.addressOfLastCrime = null;
    }
    getCount(){
        var thiefCountRef = database.ref('Records/thiefCount');
        thiefCountRef.on("value",(data)=>{
            thiefCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
            thiefCount: count
        });
      }

      update(){
        var thiefIndex = "Records/Thief/thief" + this.index;
        database.ref(thiefIndex).set({
          Name:this.name,
          Age:this.age,
          Gender:this.gender,
          imagePath:this.imagePath,
          addressOfLastCrime:this.addressOfLastCrime
        });
      }
    
      static getThiefInfo(){
        var thiefInfoRef = database.ref('Records/Thief');
        thiefInfoRef.on("value",(data)=>{
          allThieves = data.val();
        })
}
}