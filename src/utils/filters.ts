export namespace Filters {
  
  export const numberFilter = (value: number, format: number): number => {
    return Number(value.toPrecision(format));
  }

  export const capitalize =  (value: string): string => {
    if (!value && typeof value !== 'string') {
      console.warn('Capitalize filter can only accept strings') 
      return '';
    };
    let newValue = value.toString();
    return newValue.charAt(0).toUpperCase() + newValue.slice(1);
  }

  export const uppercase =  (value: string): string => {
    if (!value && typeof value !== 'string') {
      console.warn('Uppercase filter can only accept strings') 
      return '';
    };
    let newValue = value.toString();
    return newValue.toUpperCase();
  }
}