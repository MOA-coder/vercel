"use client";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles2 from "@/styles/inicio.module.css";
import styles from "@/styles/cards.module.css";
import Top2 from "@/components/top";
import Menu from "@/components/menu";
import CartaoMultischool, { CartaoEstudante } from "@/components/cards";
import InstituicaoResume from "@/components/resumeHome";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import { StringUtils } from "@/utils";
import usePeriodicStudentUpdate from "@/hooks/usePeriodicStudentUpdate";
import { TransactionService } from "@/services";
import { Transaction } from "@/infra/interfacess";
import { TransactionList } from "@/components/transactionTable/transactrionTable";
import Layout from "@/components/Layout";
import QRCode from "qrcode";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const student = useAppSelector(selectUser);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % 2),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2),
  });

  const adhesionNumber = student?.adhesionNumber
    ? String(student.adhesionNumber)
    : "";
  usePeriodicStudentUpdate({ studentAdhesionNumber: adhesionNumber });

  const TransactsService = new TransactionService();

  async function getTransacts() {
    if (student?.account?._id) {
      const datas = await TransactsService.getTransactionsByAccount(
        student.account._id
      );
      return datas;
    }
    return [];
  }

  useEffect(() => {
    async function fetchTransactions() {
      const transacts = await getTransacts();
      console.log(transacts);
      setTransactions(transacts); // Atualizando o estado com as transações
    }

    fetchTransactions();
  }, []);

  const color = "#f9d048";

  return (
    <Layout title="Os meus cartões">
      <div className={`${styles.container}`}>
        {" "}
        <Top2
          information={`Olá, ${StringUtils.getFirstAndLastWord(
            student?.studentName ? student?.studentName : ""
          )}`}
        />
        {/* Carousel container */}
        <div className={styles2.carouselContainer} {...handlers}>
          <div
            className={`${styles2.carousel} ${styles.cards} ${styles2.cards}`}
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${
                currentIndex * 20
              }px))`,
            }}
          >
            <div
              className={`${styles2.cardWrapper} ${
                currentIndex === 0 ? styles2.activeCard : ""
              }`}
            >
              <CartaoMultischool />
            </div>

            <div
              className={`${styles2.cardWrapper} ${
                currentIndex === 1 ? styles2.activeCard : ""
              }`}
            >
              <CartaoEstudante
                student={{
                  name: "Ana Correia de Assis Diogo",
                  course: "Engenharia Informática",
                  registrationNumber: "20231234",
                  classGroup: "EINF-M2",
                  institution:
                    "ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências",
                  logo: "ispt.svg",
                  avatar: "id.svg",
                }}
                color={color}
              />
            </div>
          </div>
        </div>
        {/* Resumo */}
        <div className={styles2.resume}>
          <ul>
            {currentIndex === 0 && (
              <>
                {/* APENAS DEVEM SER EXIBIDOS ATÉ 5 | RESUMO */}
                <TransactionList
                  transactions={[
                    {
                      _id: "1",
                      description: "Transferência propina",
                      createdAt: new Date("2024-07-01"),
                      amount: 100000,
                      type: "credit",
                      status: "success",
                      account: "Conta Salário",
                    },
                    {
                      _id: "2",
                      description: "Compra Online",
                      createdAt: new Date("2024-07-04"),
                      amount: 25000,
                      type: "debit",
                      status: "pending",
                      account: "Conta Corrente",
                    },
                    {
                      _id: "3",
                      description: "Compra Online",
                      createdAt: new Date("2024-07-04"),
                      amount: 25000,
                      type: "debit",
                      status: "pending",
                      account: "Conta Corrente",
                    },
                    {
                      _id: "4",
                      description: "Compra Online",
                      createdAt: new Date("2024-07-04"),
                      amount: 25000,
                      type: "debit",
                      status: "pending",
                      account: "Conta Corrente",
                    },
                    {
                      _id: "5",
                      description: "Compra Online",
                      createdAt: new Date("2024-07-04"),
                      amount: 25000,
                      type: "debit",
                      status: "pending",
                      account: "Conta Corrente",
                    },
                    {
                      _id: "6",
                      description: "Compra Online",
                      createdAt: new Date("2024-07-04"),
                      amount: 25000,
                      type: "debit",
                      status: "pending",
                      account: "Conta Corrente",
                    },
                  ]}
                />
              </>
            )}

            {currentIndex === 1 && (
              <>
                <InstituicaoResume />
              </>
            )}
          </ul>
        </div>
        {/* Menu */}
        <Menu />
      </div>
    </Layout>
  );
}
