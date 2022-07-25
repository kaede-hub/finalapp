import React from 'react'
import { Header } from '../components/Header'
import { Heading, Text } from "@chakra-ui/react";

function welcome() {
  return (
    <>
      <React.StrictMode>
        <Header />
          <Heading fontSize="34px" px="4" mt={6} mb={4} lineHeight={1.235} letterSpacing="0.00735em" fontWeight="700">Welcomeページ</Heading>
          <Text px="4" mt={6} mb={4} fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">Todoアプリへようこそ!! こちらのアプリではログインが必須です。</Text>
            <div>
              <Text px="4" fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em" >新規登録はこちらをクリック</Text>
            </div>
            <div>
              <Text px="4" fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">ログインはこちらをクリック</Text>
            </div>

            <Text px="4" mt={6} fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">テストユーザーとして、以下のアカウント情報でログイン可能です</Text>
            <Text px="4" fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">メールアドレス: yuki@gmail.com</Text>
            <Text px="4" fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">パスワード: yukiyuki</Text>
      </React.StrictMode>
    </>
  )
}

export default welcome