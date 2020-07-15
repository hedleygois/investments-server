import request from "supertest";

import { queryDB } from "../../api/Api";
import app from "../../index";

jest.mock("../../api/Api");

describe("QueryDBRoute", () => {
  it("correctly calls the QueryDB function", async () => {
    await request(app)
      .post("/query")
      .set("content-type", "application/json")
      .send({ query: "query", variables: JSON.stringify({ param: "test" }) });
    expect(queryDB).toHaveBeenCalledTimes(1);
    expect(queryDB).toHaveBeenCalledWith({
      query: "query",
      variables: JSON.stringify({ param: "test" }),
    });
  });
});
