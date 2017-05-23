export class Contributor {
  firstName: string;
  name: string;
  from: string;
  to: string;
  githubId: string;

  // To be able to sort eg an array
  public static compare(a: Contributor, b: Contributor): number {
    let compare;

    // Check for FROM
    compare = a.from.localeCompare(b.from);
    if (compare !== 0) {
      return compare;
    }

    // Check for NAME
    compare = a.name.localeCompare(b.name);
    if (compare !== 0) {
      return compare;
    }

    // Check for FIRST_NAME
    compare = a.firstName.localeCompare(b.firstName);

    return compare;
  }

  constructor(firstName: string, name: string, from: string, githubId: string = '', to: string = 'present') {
    this.firstName = firstName;
    this.name = name;
    this.from = from;
    this.githubId = githubId;
    this.to = to;
  }
}
