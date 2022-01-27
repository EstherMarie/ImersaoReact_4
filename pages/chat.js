import Head from "next/head";
import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React, { useState } from "react";
import appConfig from "../config.json";

export default function ChatPage() {
  // Sua lógica vai aqui
  const [mensagem, setMensagem] = useState("");
  const [listaDeMensagens, setListaDeMensagens] = useState([]);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      usuario: "EstherMarie",
      texto: novaMensagem,
    };
    setListaDeMensagens([mensagem, ...listaDeMensagens]);
    setMensagem("");
  }
  // ./Sua lógica vai aqui
  return (
    <>
      <Head>
        <title>Aluracord - Chat</title>
      </Head>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://i.pinimg.com/originals/66/bc/75/66bc75cf6ac5e5cc2d8bb1d95e645bf4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // backgroundBlendMode: "multiply",
          color: appConfig.theme.colors.neutrals["000"],
        }}
      >
        <Box
          tag="main"
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            borderRadius: "5px",
            backgroundColor: appConfig.theme.colors.neutrals[700],
            height: "100%",
            maxWidth: "95%",
            maxHeight: "95vh",
            padding: "32px",
          }}
        >
          <Header />
          <Box
            styleSheet={{
              position: "relative",
              display: "flex",
              flex: 1,
              height: "80%",
              backgroundColor: appConfig.theme.colors.neutrals[600],
              flexDirection: "column",
              borderRadius: "5px",
              padding: "16px",
            }}
          >
            <MessageList mensagens={listaDeMensagens} />
            {/* {listaDeMensagens.map((mensagemAtual, index) => {
              return (
                <li key={index}>
                  {mensagemAtual.usuario}: {mensagemAtual.texto}
                </li>
              );
            })} */}

            <Box
              as="form"
              styleSheet={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                value={mensagem}
                onChange={(e) => {
                  setMensagem(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleNovaMensagem(mensagem);
                  }
                }}
                placeholder="Insira sua mensagem aqui..."
                type="textarea"
                styleSheet={{
                  width: "100%",
                  border: "0",
                  resize: "none",
                  borderRadius: "5px",
                  padding: "6px 8px",
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                  marginRight: "12px",
                  color: appConfig.theme.colors.neutrals[200],
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text tag="h1" styleSheet={{ fontSize: "1rem" }}>
          Chat
        </Text>
        <Button
          variant="tertiary"
          buttonColors={{ mainColor: "#B3B3B3" }}
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList({ mensagens }) {
  console.log("MessageList", mensagens);
  return (
    <Box
      tag="ul"
      styleSheet={{
        // overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {mensagens.map((mensagem, index) => {
        return (
          <Text
            key={index}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/${
                  !mensagem.usuario ? vanessametonini : mensagem.usuario
                }.png`}
              />
              <Text tag="strong">{mensagem.de}</Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
