const scchema={
  name:'resource',
  title:"resource",
  type:'document',
  fields:[{
    name:'title',
    title:'Title',
    type:'string',
    require,
    validation:(rule:any)=>rule.required()
  }]
}