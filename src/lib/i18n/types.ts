export type Dictionary = Awaited<
  ReturnType<typeof import("./getDictionary")["getDictionary"]>
>;
