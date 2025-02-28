import isObject from 'lodash/isObject';

export function transformOrFilter(values: any) {
    if (!isObject(values) || Array.isArray(values)) {
        throw new Error(
            "Invalid '@or' filter, expected an object as first element"
        );
    }

    const queries = Object.values(values);
    if (queries.length === 0) {
        throw new Error("Invalid '@or' filter, object is empty");
    }

    return queries[0];
}
