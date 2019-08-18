const Express=require('express')
var app=new Express();
app.set('view engine','ejs');

app.use(Express.static(__dirname+"/public"));
books=[
    {
        title:"Into the Water",
        author:"Paula Hawkins",
        publisher:"Xpress",
        image: '/image/a.jpg'
      

    },
    {
        title:"Attitude Is Everything: Change Your Attitude ... Change Your Life!",
        author:"Jeff Keller",
        publisher:"Xpress"
        

    },
    {
        title:"The Complete Novels of Sherlock Holmes",
        author:"Arthur Conan Doyle",
        publisher:"Xpress"
    
    },
    {
        title:"Life is What You Make It",
        author:"Preeti Shenoy",
        publisher:"Xpress"      

    },
    {
        title:"The Power of your Subconscious Mind",
        author:"Joseph Murphy",
        publisher:"Xpress"},
        
    {
        title:"The Alchemist",
        author:" Paulo Coelho",
        publisher:"DC Books"
        
    },
    {
        title:"Half Girlfriend",
        author:"Chetan Bhagat",
        publisher:"DC Books"
        

    },
    {
        title:" Who Will Cry When You Die?",
        author:" Robin Sharma",
        publisher:"DC Books"
       

    },
    {
        title:"One Indian Girl",
        author:"Chetan Bhagat",
        publisher:"DC Books"
    
    },
    {
        title:"You are the Best Friend",
        author:"Ajay K. Pandey",
        publisher:"Nation publishers"

    }];
        a=[
            {
                AuthorName:'Paula Hawkins',
                image: '/image/a.jpg',
                dob:'19-10-1990',
                place:'london'
            },
            {
                AuthorName:'Jeff Keller',
                image:"/image/b.jpg",
                dob:'19-10-1990',
                place:'london'
            },
            {
                AuthorName:'Arthur Conan Doyle',
                image:"/image/c.jpg",
                dob:'19-10-1990',
                place:'london'
            },{
                AuthorName:'Preeti Shenoy',
                image:"/image/d.jpg",
                dob:'19-10-1990',
                place:'london'
            },{
                AuthorName:'Joseph Murphy',
                image:"/image/e.jpg",
                dob:'19-10-1990',
                place:'london'
            },{
                AuthorName:'Paulo Coelho',
                image:"/image/f.jpg",
                dob:'19-10-1990',
                place:'london'
            },
            {
                AuthorName:'Chetan Bhagat',
                image:"/image/g.jpg",
                dob:'19-10-1990',
                place:'london'
            },
            {
                AuthorName:'Robin Sharma',
                image:"/image/h.jpg",
                dob:'19-10-1990',
                place:'london'
            },
            {
                AuthorName:'Chetan Bhagat',
                image:"/image/g.jpg",
                dob:'19-10-1990',
                place:'london'
            },
            {
                AuthorName:'Ajay K. Pandey',
                image:"/image/i.jpg",
                dob:'19-10-1990',
                place:'london'
            },
        ];


app.get('/readmore/:id',(req,res)=>{

    const x=req.params.id;
    res.render('single',{'books': books[x],

    navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],

    title:'Library'}   )

})


app.get('/authors1/:id',(req,res)=>{

    const x=req.params.id;
    res.render('authors1',{'a': a[x],

    navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],

    title:'Library'}   )

})




app.get('/',(req,res)=>{
    res.render(
        'index',
        {
            navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],

            title:'Library'
        }
    )
})
app.get('/books',(req,res)=>{
    res.render('books',{ navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],title:'books',books:books})
})
app.get('/authors',(req,res)=>{
    res.render('author',{ navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],title:'authors',a:a})
})
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on http://localhost:3000")
    });