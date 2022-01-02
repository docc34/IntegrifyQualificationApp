import { Image, Card, Row, Col } from 'react-bootstrap';
const MakeCard = (p)=>{
 //Näin voi cutomoida kortin ulkonäköä
    //   <Card
    //   bg={variant.toLowerCase()}
    //   key={idx}
    //   text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    //   style={{ width: '18rem' }}
    //   className="mb-2"
    // ></Card>
    
    if(p.data != null){
        return (
        <div>
          <Row xs={1} sm={1} md={2}  xl={3}  className="g-4" >
            {p.data.map((e, i) => {
              let url = "";
              if(e!= null){
                 url = "/Maksu/?jobPostId=" + e.idJobPost;
              return (<Col>
                <Card className="Post-Card">
                  <Card.Body>
                    <Card.Title>Test</Card.Title>
                    <Card.Text className="CardData"> 
                      <div className="ProfileCardTitleContainer">
                        <div>{e.name}</div>
                        <div>{e.brewery_type}</div>
                        <div>{e.city}</div>
                      </div>
                    </Card.Text>
                    <Card.Text className="CardFooter"> 
                      <div className="ProfileCardTitleContainer">
                        <a href={"/companyDetail?companyName=" + e.name+"&longitude="+e.longitude+"&latitude="+e.latitude}>CompanyDetails</a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  
                </Card>
              </Col>)
            }})}
          </Row>
        </div>
    
        )
      }
      else {
        return(<div><p>Loading</p></div>)
      }
}
const NullToText = (p)=>{
    if(p.data == null){
        return "null";
    }
    else{
        return p.data;
    }
}
export{MakeCard,NullToText}