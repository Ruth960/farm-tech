import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{headerShown: true}}>
      <Stack.Screen name="signup" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}
