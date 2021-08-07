interface String {
  ToCapitalize(): string;
}

String.prototype.ToCapitalize = function (): string {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
