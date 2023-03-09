import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation'


function PostModal({isOpen, toggle, submit, currentItem}) {

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>
                    Add Post
                </ModalHeader>
                <ModalBody>
                    <AvForm onSubmit={submit} id={'postForm'} model={currentItem? currentItem:''}>
                        <AvField label={'Title'} type={'text'} name={'title'}/>
                        <AvField label={'Body'} type={'textarea'} name={'body'}/>
                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <button className={'btn btn-dark'} type={"submit"} form={'postForm'}>save</button>
                    <button className={'btn btn-dark'} onClick={toggle}>close</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default PostModal;