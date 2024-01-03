import React from "react";
import styles from "./styles.module.css";
import { Title } from "../ui/title/Title";
import CTAButton from "../ui/buttons/cta/CTAButton";
import ReactDOM from "react-dom";
import Image from "next/image";
import { useState } from "react";

const SuccessModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <p className={styles.successText}>Formulário enviado com sucesso!</p>
        <Image
          className={styles.sucessImg}
          src="/success.svg"
          alt="Sucesso"
          width={100}
          height={100}
        />
      </div>
    </div>,
    document.body
  );
};

export default SuccessModal;

export const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    console.log("Formulário enviado");
    e.preventDefault();
    setIsFormSubmitted(true);
  };
  const closeModal = () => {
    setIsFormSubmitted(false);
  };

  return (
    <>
      <Title title="Formulário de Vaga" />
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nome</label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type="email" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Link para Portfólio</label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Por que você quer fazer parte da Jojos?
            </label>
            <textarea className={styles.textarea} type="text" />
          </div>
          <div className={styles.sendForm}>
            <CTAButton
              type="submit"
              text="Enviar formulário"
              onClick={handleSubmit}
            />
          </div>
        </form>
        {isFormSubmitted && <SuccessModal onClose={closeModal} />}
      </div>
    </>
  );
};
