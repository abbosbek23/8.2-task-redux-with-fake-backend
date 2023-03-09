import React from 'react';
import {Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
import {AvForm,AvField} from "availity-reactstrap-validation";

function UserModal({isOpen,toggle,submit,currentItem}) {
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>
                    Add User
                </ModalHeader>
                <ModalBody>
                    <AvForm onSubmit={submit} id={'userForm'} model={currentItem}>
                        <AvField label={'Name'} type={'text'} name={"name"}/>
                        <AvField lable={'Username'} type={'text'} name={"username"}/>
                        <AvField lable={'Email'} type={'email'} name={"email"}/>
                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <button className={'btn btn-primary'} type={"submit"} form={'userForm'}>save</button>
                    <button className={'btn btn-primary'} onClick={toggle}>close</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UserModal;