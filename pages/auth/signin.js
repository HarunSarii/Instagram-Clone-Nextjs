import { getProviders, signIn as SignIntoProviders } from "next-auth/react"
import Header from '../../components/Header'

export default function signIn({ providers }) {
  console.log('providerss', providers);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-26 px-14 text-center ">
        <img className="w-80" src="https://links.papareact.com/ocw" />
        <p className="font-xs italic">
          This is an instagram clone app.
        </p>
        <div className="mt-40 ">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignIntoProviders(provider.id, {callbackUrl: '/' })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  console.log("providers", providers);
  return {
    props: { providers },
  }
}