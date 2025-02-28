type CanAccessParams<
    RecordType extends Record<string, any> = Record<string, any>,
> = {
    action: string;
    resource: string;
    record?: RecordType;
};

export const canAccess = <
    RecordType extends Record<string, any> = Record<string, any>,
>(
    role: string,
    params: CanAccessParams<RecordType>
) => {
    if (role === 'admin') {
        return true;
    }

    if (params.resource === 'sales') {
        return false;
    }

    return true;
};
