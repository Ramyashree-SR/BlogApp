import React from 'react';
import "../../App.css";
import { Button, Modal } from "react-bootstrap";

function ResModal({
    children,
    btnCls,
    openMod,
    handleClose,
    heading,
    close,
    save,
    savefun,
    showFooter = true,
  }) {
  return (
    <div>
        <Modal show={openMod} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {showFooter && (
          <Modal.Footer>
            <Button
              className={btnCls}
              variant="secondary"
              onClick={handleClose}
            >
              {close}
            </Button>
            <Button className={btnCls} variant="primary" onClick={savefun}>
              {save}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
 

    </div>
  )
}

export default ResModal