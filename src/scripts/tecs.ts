import { Tecnologies } from "@/constants/tecs";
import type TecModel from "@/model/Tec";

export function GetTecs(tecs: string[]): TecModel[] {
    const finalTecs: TecModel[] = [];

    tecs.map((current: string) => {
        const tecFound = Tecnologies.find((tc) => (tc.name ?? tc.label).toLowerCase() === current.toLowerCase()) || null

        if (tecFound) {
            finalTecs.push(tecFound);
        }
    })

    return finalTecs
}