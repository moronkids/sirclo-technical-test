import Track from "components/homepage/Track";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Hooks } from "providers";
import { useState } from "react";
test("User can see page sirclo-music", async () => {
  const Wrapper = () => {
    const queryClient = new QueryClient();
    const [details, setDetails] = useState(false);
    const [id, setId] = useState("");
    return (
      <>
        <Hooks.Provider value={(setId, details, setDetails)}>
          <QueryClientProvider client={queryClient}>
            <Track />
          </QueryClientProvider>
        </Hooks.Provider>
      </>
    );
  };
  render(<Wrapper />);
  expect(screen.getByTestId("track-component")).toBeInTheDocument();
});
