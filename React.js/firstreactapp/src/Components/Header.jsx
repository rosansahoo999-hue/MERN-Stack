function Header({headerInfo,cname,children}){

//   let {headerInfo,cname}=props;
//   console.log(headerInfo,cname)    
//    console.log(props.headerInfo.email)
//    console.log(props.headerInfo.phone)

    return(
        <div>
        {/* <h1>Welcome to Header Section {props.email} | {props.phone}</h1> */}
        <h3>Header Part</h3>
        {children}
        <h1>{headerInfo.email} | {cname}</h1>
      
        </div>
    )
}

export { Header };