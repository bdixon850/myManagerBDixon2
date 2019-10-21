import React, { Component } from 'react';
import $ from 'jquery';
import  'bootstrap/dist/css/bootstrap.css';
import contractors from '../contractors.json';

const background = {
    backgroundColor: "grey",
    position: "absolute",
    // height: "635px",
    marginTop: "50px",
    marginLeft: "250px",
    height: "1000px",
    width: "900px",
    top: "50px",
}

class Contractor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contractors
        }
        this.handleOfferClick = this.handleOfferClick.bind(this);
        this.handleScheduleClick = this.handleScheduleClick.bind(this)
    }

    handleOfferClick(e) {
        e.preventDefault();
        $('#exampleModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            modal.find('.modal-title').text('New message to ' + recipient)
            modal.find('.modal-body input').val(recipient)
        })
    }

    handleScheduleClick(e) {
        e.preventDefault();
        window.location.href = '/payment'
    }

    handleSendEmail(e) {
        e.preventDefault();

        alert('Thanks, your message has been sent. You will be notified once the contractor responds')
    }
    
    render() {
        return (
            <div style={background}>
                {this.state.contractors.map(contractor => (
                    <div className="card" key={contractor.id} id={contractor.id}>
                        <img src={contractor.image} className="card-img-top" alt={contractor.Name}></img>
                        <div className="card-body">
                            <h5 className="card-title">{contractor.Occupation}</h5>
                            <p className="card-text">The Price per hour to book this consultant is: {contractor.Price}</p>
                        </div>
                        <div className="card-body">
                            <button type="submit" className="btn btn-success" onClick={this.handleScheduleClick}>Book/Schedule</button>
                            <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.handleOfferClick}>Make Offer</button>
                            {/* <a href="#" className="card-link">Book/Schedule</a> */}
                            {/* <a href="#" className="card-link">Make Offer</a> */}
                        </div>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Make an offer</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Personal Message:</label>
                                                <input type="text" className="form-control" id="recipient-name" required></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message-text" className="col-form-label">Offer Price:</label>
                                                <textarea className="form-control" id="message-text" required></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSendEmail}>Send message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        );
    }
};

export default Contractor;
//     return (
//         <div>
//             <div className="card">
//                 <img src={props.image} className="card-img-top" alt={props.Name}></img>
//                 <div className="card-body">
//                     <h5 className="card-title">{props.Occupation}</h5>
//                     <p className="card-text">The Price per hour to book this consultant is: {props.Price}</p>
//                 </div>
//                 <div className="card-body">
//                     <button type="submit" className="btn btn-success" onClick={(e) => props.handleScheduleClick(e)}>Book/Schedule</button>
//                     <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={handleOfferClick}>Make Offer</button>
//                     {/* <a href="#" className="card-link">Book/Schedule</a> */}
//                     {/* <a href="#" className="card-link">Make Offer</a> */}
//                 </div>

//                 <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="exampleModalLabel">New message</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">
//                                 <form>
//                                     <div className="form-group">
//                                         <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
//                                         <input type="text" className="form-control" id="recipient-name"></input>
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="message-text" className="col-form-label">Message:</label>
//                                         <textarea className="form-control" id="message-text"></textarea>
//                                     </div>
//                                 </form>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                                 <button type="button" className="btn btn-primary">Send message</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }





// function Contractor(props) {
//     function handleOfferClick(e) {
//         e.preventDefault();
//         $('#exampleModal').on('show.bs.modal', function (event) {
//             var button = $(event.relatedTarget) // Button that triggered the modal
//             var recipient = button.data('whatever') // Extract info from data-* attributes
//             // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//             // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//             var modal = $(this)
//             modal.find('.modal-title').text('New message to ' + recipient)
//             modal.find('.modal-body input').val(recipient)
//         })
//     }
//     return (
//         <div>
//             <div className="card">
//                 <img src={props.image} className="card-img-top" alt={props.Name}></img>
//                 <div className="card-body">
//                     <h5 className="card-title">{props.Occupation}</h5>
//                     <p className="card-text">The Price per hour to book this consultant is: {props.Price}</p>
//                 </div>
//                 <div className="card-body">
//                     <button type="submit" className="btn btn-success" onClick={(e) => props.handleScheduleClick(e)}>Book/Schedule</button>
//                     <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={handleOfferClick}>Make Offer</button>
//                     {/* <a href="#" className="card-link">Book/Schedule</a> */}
//                     {/* <a href="#" className="card-link">Make Offer</a> */}
//                 </div>

//                 <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="exampleModalLabel">New message</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">
//                                 <form>
//                                     <div className="form-group">
//                                         <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
//                                         <input type="text" className="form-control" id="recipient-name"></input>
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="message-text" className="col-form-label">Message:</label>
//                                         <textarea className="form-control" id="message-text"></textarea>
//                                     </div>
//                                 </form>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                                 <button type="button" className="btn btn-primary">Send message</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }