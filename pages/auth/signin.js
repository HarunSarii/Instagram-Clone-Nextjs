import { getProviders, signIn as SignIntoProviders } from "next-auth/react"

export default function signIn({ providers }) {
  console.log('providerss', providers);
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProviders(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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