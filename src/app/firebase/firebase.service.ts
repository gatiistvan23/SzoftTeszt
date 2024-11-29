import { Injectable, Injectable } from "@angular/core";
import {Database, ref, get, child } from "@angular/fire/database";
import { remove, set, update } from "firebase/database";

@Injectable({
    providedIn: "root",
})
export class FirebaseService {
    constructor(private database: Database) {}

    getData(path: string): Promise<any> {
        const dbRef = ref(this.database);
        return get(child(dbRef, path)).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                return null;
            }
        });
    }
    saveData(path: string, data:any): Promise<void> {
        const dbRef = ref(this.database, path);
        return set(dbRef, data);
    }

    updateData(path: string, data:any): Promise<void> {
        const dbRef = ref(this.database, path);
        return update(dbRef, data);
    }

    deleteData(path: string): Promise<void> {
        const dbRef = ref(this.database, path);
        return remove(dbRef);
    }
}
