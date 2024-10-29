import { Provider } from 'fuels'
import { useEffect, useState } from 'react'
import { Text, View } from "react-native";

export default function Index() {
  const [provider, setProvider] = useState<Provider>()

  useEffect(() => {
    (async () => {
      const provider = await Provider.create('https://mainnet.fuel.network/v1/graphql')
      setProvider(provider)
    })()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>
        {JSON.stringify(provider)}
      </Text>
    </View>
  );
}
