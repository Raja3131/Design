import { Component } from "react";
import { Form, Button, ListGroup,Table,DropdownButton,Dropdown } from "react-bootstrap";

class Data extends Component{
    profession={myarray:['Intern','Junior','Senior']}
    constructor() {
        super();
        this.state = {
            data: [] 
        }
    }
    addData = (event)=> {
        event.preventDefault(); 
        
        const data = event.target,
        newData = {
            text: data.text.value,
            date: data.date.value,
        }
       
        this.state.data.push(newData);
        this.setState({
            data: this.state.data
        })
    }
    deleteData = (event)=> {
        this.state.data.splice(event.target.value, 1)
        this.setState({
            data: this.state.data
        })
    }
    render() {
        console.log(this.state.data)
        return(
            <>
            <Form onSubmit={this.addData}>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Text:</Form.Label>
                    <Form.Control type="text" placeholder="Enter A Text" name="text"/>
                </Form.Group>
                <Form.Group controlId="formBasicDate">
                    <Form.Label>date:</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/yyyy" name="date"/>
                </Form.Group>
                <DropdownButton id="dropdown-basic-button" title="Profession">
                    {this.profession.myarray.map(data =>(<Dropdown.Item title={data}>{data}</Dropdown.Item>))}
  
</DropdownButton>
               
                <Button type="submit" variant="primary">
                    +
                </Button>
            </Form>

                {
                    this.state.data.map((entry)=> {
                        return(
                            <Table responsive='sm'>
                            <thead>
                              <tr>
                                <th>Text</th>
                                <th>Date</th>
                                <th>Option</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{entry.text}</td>
                                <td>{entry.date}</td>
                                <td></td>
                                
                              </tr>
                              <Button type="button" variant="danger" onClick={this.deleteData}>
                                     Delete
                                 </Button>
                              
                              </tbody>
                              
                              </Table>
                              
                        )
                    })
                }
            </>
        )
    }
}

export default Data;