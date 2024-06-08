// tagged templates
function tag(strings, ...values) {
  console.log(strings, values);
}

function upper(strings, ...values) {
  return (
    strings[0] + values[0].toUpperCase() + strings[1] + values[1].toUpperCase()
  );
}

function html(strings: TemplateStringsArray, values: unknown[]) {
  values.push("");

  console.log(strings, values);

  return pipe(
    zip(
      strings,
      map((v) => `${v}`, values)
    ),
    flat,
    reduce((a, b) => a + b)
  );
}

export function main() {
  const a = "a";
  const b = "b";
  const c = "c";

  const result = html`1${a}2${b}3${c}`;
  console.log("result: ", result);
}
