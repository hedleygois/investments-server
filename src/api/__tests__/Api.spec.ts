/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fetch from "node-fetch";

import { queryDB } from "../../api/Api";

jest.mock("node-fetch");

describe("Api", () => {
  beforeEach(jest.resetAllMocks);

  it("uses the correct request params", async () => {
    ((fetch as unknown) as jest.Mock).mockResolvedValue({ json: jest.fn() });
    await queryDB({
      query: "bla",
      variables: JSON.stringify({ bla: "blabla" }),
    });
    const calls = ((fetch as unknown) as jest.Mock).mock.calls;
    const calledUrl = calls[0][0];
    const calledParams = calls[0][1];
    
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(calledUrl).toEqual(
      "https://investments-graphql.herokuapp.com/v1/graphql"
    );
    expect(calledParams.method).toEqual("POST");
    expect(calledParams.headers["content-type"]).toEqual("application/json");
    expect(calledParams.body).toEqual(JSON.stringify({ query: "bla", variables: JSON.stringify({ bla: "blabla" }) }));
  });
});
