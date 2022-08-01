import React from 'react'
import { Header } from '../components/Header'
import { Heading, Text, Link } from "@chakra-ui/react";

const welcome = () => {
  return (
    <>
      <React.StrictMode>
        <Header />
          <Heading fontSize="34px" px="4" mt={6} mb={4} lineHeight={1.235} letterSpacing="0.00735em" fontWeight="700">Welcomeページ</Heading>
          <Text px="4" mt={6} mb={4} fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">Todoアプリへようこそ!! こちらのアプリではログインが必須です。</Text>
            <div>
              <Text px="4" fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em" >新規登録は<Link href={'/signUp'} color={'blue'}>こちら</Link>をクリック</Text>
            </div>
            <div>
              <Text px="4" fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">ログインは<Link href={'/login'} color={'blue'}>こちら</Link>をクリック</Text>
            </div>

            <Text px="4" mt={6} fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">テストユーザーとして、以下のアカウント情報でログイン可能です</Text>
            <Text px="4" fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">メールアドレス: yuki@gmail.com</Text>
            <Text px="4" fontWeight="400" fontSize="1rem" lineHeight="1.5" letterSpacing="0.00938em">パスワード: yukiyuki</Text>
      </React.StrictMode>
    </>
  )
}

export default welcome