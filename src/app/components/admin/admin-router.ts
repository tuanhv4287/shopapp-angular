import { AdminComponent } from "./admin.component";

import { Routes } from "@angular/router";
import { OrderAdminComponent } from "./order/order-admin.component";
import { ProductAdminComponent } from "./product/product-admin.component";
import { CategoryAdminComponent } from "./category/category-admin.component";
import { DetailOrderAdminComponent } from "./detail-order-admin/detail-order-admin.component";
import { AdminGuardFn } from "../guards/admin.guard";



export const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,canActivate:[AdminGuardFn],
        children: [
            {
                path: 'orders',
                component: OrderAdminComponent
            },            
            {
                path: 'products',
                component: ProductAdminComponent
            },
            {
                path: 'categories',
                component: CategoryAdminComponent
            },
            //sub path
            {
                path: 'orders/:id',
                component: DetailOrderAdminComponent
            },
            // {
            //     path: 'products/update/:id',
            //     component: UpdateProductAdminComponent
            // },
            // {
            //     path: 'products/insert',
            //     component: InsertProductAdminComponent
            // },
            // //categories            
            // {
            //     path: 'categories/update/:id',
            //     component: UpdateCategoryAdminComponent
            // },
            // {
            //     path: 'categories/insert',
            //     component: InsertCategoryAdminComponent
            // },
            // {
            //     path: 'users',
            //     component: UserAdminComponent
            // },  
        ]
    }
];