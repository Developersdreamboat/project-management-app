import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

export default function AddClientModal() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
	}

  return (
    <>
			<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#AddClientModal">
				<div className="d-flex align-items-center">
					<FaUser className="icon" />
					<div>Add Client</div>
				</div>
			</button>

			<div class="modal fade" id="AddClientModal" tabindex="-1" role="dialog" aria-labelledby="AddClientModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="AddClientModalLabel">Add Client</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form onSubmit={onSubmit}>
								<div className="mb-3">
									<label className="form-label">Name</label>
									<input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
								</div>
								<div className="mb-3">
									<label className="form-label">Email</label>
									<input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
								</div>
								<div className="mb-3">
									<label className="form-label">Phone</label>
									<input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
								</div>
								<button type="submit" data-bs-dismiss="modal" className="btn btn-secondary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}
