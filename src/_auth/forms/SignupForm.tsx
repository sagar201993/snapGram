import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signupValidation } from "@/lib/validation";

const SignupForm = () => {
  const form = useForm<z.infer<typeof signupValidation>>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
    },
  });

  // Define a submit handler
  const onSubmit = (values: z.infer<typeof signupValidation>) => {
    // Do something with the form values
    // ✅ This will be type-safe and validated
    console.log(values);
  };

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h2 className="h-3bold md:h2-bold pt-5 sm:pt-12">
          Create a new Account
        </h2>
        <p className="text-light-3 small-medium md:base-regular">
          To use snapgram your account details
        </p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SignupForm;
