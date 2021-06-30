function getPermissionList(permission: Permission): string[] {
    const arr: string[] = [];
    
    for(const item in Permission){
        if((permission & +Permission[item]) === +Permission[item]){
            arr.push(item)
        }
    }
    return [...arr];
}

enum Permission {
    Read = 1,
    Write = 2, 
    Execute = 4
}

console.log(getPermissionList(Permission.Read | Permission.Write));